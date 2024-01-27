import { Component, PropsWithChildren, ReactNode, createElement } from "react";

class Mock extends Component<PropsWithChildren> {

  public static displayName = "View";

  public constructor(props: PropsWithChildren) {
    super(props);
  }

  public render(): ReactNode {
    return createElement("View", this.props, this.props.children);
  }
}

export const ViewNativeComponentMock = {
  default: Mock,
};
