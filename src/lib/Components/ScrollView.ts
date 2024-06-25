/* eslint-disable sort-keys */
import { type ElementRef, type PropsWithChildren, type ReactNode, createElement } from "react";
import { type HostComponent, type NativeMethods, ScrollView, View, requireNativeComponent } from "react-native";

import { noop } from "../../helpers/commons";
import { mockComponent } from "../../helpers/mockComponent";
import { nativeMethodsMock } from "../../helpers/nativeMethodsMock";

export type ScrollViewMethods = NativeMethods | ScrollView & {
  getInnerViewRef: () => ElementRef<typeof View> | null;
  getNativeScrollRef: () => ElementRef<HostComponent<unknown>> | null;
};

export const scrollViewMethodsMock: ScrollViewMethods = {
  ...nativeMethodsMock,
  getScrollResponder: () => ({
    addListenerOn: noop,
    componentWillMount: noop,
    scrollResponderGetScrollableNode: noop,
    scrollResponderHandleMomentumScrollBegin: noop,
    scrollResponderHandleMomentumScrollEnd: noop,
    scrollResponderHandleResponderGrant: noop,
    scrollResponderHandleResponderReject: noop,
    scrollResponderHandleResponderRelease: noop,
    scrollResponderHandleScroll: noop,
    scrollResponderHandleScrollBeginDrag: noop,
    scrollResponderHandleScrollEndDrag: noop,
    scrollResponderHandleScrollShouldSetResponder: () => false,
    scrollResponderHandleStartShouldSetResponder: () => false,
    scrollResponderHandleStartShouldSetResponderCapture: () => false,
    scrollResponderHandleTerminationRequest: () => false,
    scrollResponderHandleTouchEnd: noop,
    scrollResponderHandleTouchMove: noop,
    scrollResponderHandleTouchStart: noop,
    scrollResponderInputMeasureAndScrollToKeyboard: noop,
    scrollResponderIsAnimating: () => false,
    scrollResponderKeyboardDidHide: noop,
    scrollResponderKeyboardDidShow: noop,
    scrollResponderKeyboardWillHide: noop,
    scrollResponderKeyboardWillShow: noop,
    scrollResponderScrollNativeHandleToKeyboard: noop,
    scrollResponderScrollTo: noop,
    scrollResponderTextInputFocusError: noop,
    scrollResponderZoomTo: noop,
  }),
  getScrollableNode: noop,
  getInnerViewNode: noop,
  getInnerViewRef: () => null,
  getNativeScrollRef: () => null,
  scrollTo: noop,
  scrollToEnd: noop,
  flashScrollIndicators: noop,
  scrollResponderZoomTo: noop,
  scrollResponderScrollNativeHandleToKeyboard: noop,

};

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
