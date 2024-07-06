import { type PropsWithChildren, type ReactNode, createElement } from "react";
import { ScrollView, View, requireNativeComponent } from "react-native";

import { mockComponent } from "../../helpers/mockComponent";
import { scrollViewMethodsMock } from "../../helpers/nativeMethodsMock";

const RCTScrollView = requireNativeComponent("RCTScrollView");
const BaseMock = mockComponent(ScrollView, scrollViewMethodsMock);

export class ScrollViewMock<P> extends BaseMock {
  public constructor(props: PropsWithChildren<P>) {
    super(props);
  }

  public render(): ReactNode {
    return createElement(
      RCTScrollView,
      this.props as object,
      this.props.refreshControl,
      createElement(mockComponent(View), {}, this.props.children),
    );
  }
}
