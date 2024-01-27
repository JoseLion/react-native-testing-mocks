/* eslint-disable sort-keys */
import { PropsWithChildren, ReactNode, createElement } from "react";
import { ScrollView, View, requireNativeComponent } from "react-native";

import { noop } from "../../helpers/commons";
import { mockComponent } from "../../helpers/mockComponent";
import { MockNativeMethods } from "../../helpers/mockNativeMethods";

const RCTScrollView = requireNativeComponent("RCTScrollView");
const BaseMock = mockComponent(ScrollView, {
  ...MockNativeMethods,
  getScrollResponder: noop,
  getScrollableNode: noop,
  getInnerViewNode: noop,
  getInnerViewRef: noop,
  getNativeScrollRef: noop,
  scrollTo: noop,
  scrollToEnd: noop,
  flashScrollIndicators: noop,
  scrollResponderZoomTo: noop,
  scrollResponderScrollNativeHandleToKeyboard: noop,
});

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
