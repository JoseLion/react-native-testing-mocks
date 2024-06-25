import { get } from "dot-prop-immutable";
import {
  Component,
  type ComponentClass,
  type PropsWithChildren,
  type ReactNode,
  createElement,
} from "react";

import type { ScrollViewMethods } from "../lib/Components/ScrollView";
import type { TextInputMethods } from "../lib/Components/TextInput";
import type { NativeMethods } from "react-native";

export type AllNativeMethods = NativeMethods | ScrollViewMethods | TextInputMethods;

export function mockComponent<P, C extends ComponentClass<PropsWithChildren<P>>>(
  RealComponent: C,
  instanceMethods?: AllNativeMethods,
): C {
  const SuperClass: ComponentClass<PropsWithChildren<P>> = typeof RealComponent === "function"
    ? RealComponent
    : Component;
  const name = RealComponent.displayName
    || RealComponent.name
    || get(RealComponent, "render.displayName", "")
    || get(RealComponent, "render.name", "")
    || "Unknown";
  const nameWithoutPrefix = name.replace(/^(RCT|RK)/, "");

  class Mock extends SuperClass {
    public static displayName = "Component";

    public render(): ReactNode {
      const props = { ...RealComponent.defaultProps };

      if (this.props) {
        Object.keys(this.props).forEach(key => {
          // We can't just assign props on top of defaultProps
          // because React treats undefined as special and different from null.
          // If a prop is specified but set to undefined it is ignored and the
          // default prop is used instead. If it is set to null, then the
          // null value overwrites the default value.

          const prop: unknown = get(this.props, key);

          if (prop !== undefined) {
            Object.assign(props, { [key]: prop });
          }
        });
      }

      return createElement(nameWithoutPrefix, props, this.props.children);
    }
  }

  Mock.displayName = nameWithoutPrefix;

  Object.keys(RealComponent).forEach(key => {
    const staticProp: unknown = get(RealComponent, key);

    if (staticProp !== undefined) {
      Object.assign(Mock, { [key]: staticProp });
    }
  });

  if (instanceMethods) {
    Object.assign(Component.prototype, instanceMethods);
  }

  return Mock as unknown as C;
}
