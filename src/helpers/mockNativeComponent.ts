import {
  Component,
  type ComponentClass,
  type PropsWithChildren,
  type ReactNode,
  createElement,
} from "react";

const native = { tag: 1 };

export function mockNativeComponent(viewName: string): ComponentClass {
  return class extends Component<PropsWithChildren<unknown>> {
    public static displayName = viewName === "RCTView" ? "View" : viewName;

    protected _nativeTag = native.tag++;

    public constructor(props: PropsWithChildren<unknown>) {
      super(props);
    }

    public render(): ReactNode {
      return createElement(viewName, this.props, this.props.children);
    }

    public blur(): void { /* noop */ }
    public focus(): void { /* noop */ }
    public measure(): void { /* noop */ }
    public measureInWindow(): void { /* noop */ }
    public measureLayout(): void { /* noop */ }
    public setNativeProps(): void { /* noop */ }
  };
}
