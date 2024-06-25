import { get } from "dot-prop-immutable";

import type { Component, ComponentClass, PropsWithChildren, ReactNode } from "react";

export function mockModal<P, C extends typeof Component<P>>(Base: C): C {
  const BaseComponent = Base as ComponentClass<PropsWithChildren<P>>;

  class Mock extends BaseComponent {
    public render(): ReactNode {
      if (get(this.props, "visible") === false) {
        return null;
      }

      return (
        <BaseComponent {...this.props}>
          {this.props.children}
        </BaseComponent>
      );
    }
  }

  return Mock as C;
}
