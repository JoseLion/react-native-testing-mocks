import { Component, type ReactNode, createElement } from "react";
import { requireNativeComponent } from "react-native";

const RCTRefreshControl = requireNativeComponent("RCTRefreshControl");

export class RefreshControlMock extends Component {
  public static latestRef?: RefreshControlMock;

  public componentDidMount(): void {
    RefreshControlMock.latestRef = this;
  }

  public render(): ReactNode {
    return createElement(RCTRefreshControl);
  }
}
