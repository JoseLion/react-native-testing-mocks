import { noop } from "./commons";

import type { ElementRef } from "react";
import type { HostComponent, Image, NativeMethods, ScrollView, TextInput, View } from "react-native";

export type ImageMethods = Partial<typeof Image>;

export type ScrollViewMethods = NativeMethods | ScrollView & {
  getInnerViewRef: () => ElementRef<typeof View> | null;
  getNativeScrollRef: () => ElementRef<HostComponent<unknown>> | null;
};

export type TextInputMethods = NativeMethods | TextInput & {
  getNativeRef: () => ElementRef<HostComponent<unknown>> | undefined;
};

export const nativeMethodsMock: NativeMethods = {
  blur: noop,
  focus: noop,
  measure: noop,
  measureInWindow: noop,
  measureLayout: noop,
  refs: { },
  setNativeProps: noop,
};

export const imageMethodsMock: ImageMethods = {
  getSize: noop,
  getSizeWithHeaders: noop,
  prefetch: () => Promise.resolve(false),
  prefetchWithMetadata: () => Promise.resolve(false),
  queryCache: () => Promise.resolve({ }),
  resolveAssetSource: () => ({
    height: 0,
    scale: 0,
    uri: "",
    width: 0,
  }),
};

export const scrollViewMethodsMock: ScrollViewMethods = {
  ...nativeMethodsMock,
  flashScrollIndicators: noop,
  getInnerViewNode: noop,
  getInnerViewRef: () => null,
  getNativeScrollRef: () => null,
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
  scrollResponderScrollNativeHandleToKeyboard: noop,
  scrollResponderZoomTo: noop,
  scrollTo: noop,
  scrollToEnd: noop,
};

export const textInputMethodsMock: TextInputMethods = {
  ...nativeMethodsMock,
  clear: noop,
  getNativeRef: () => undefined,
  isFocused: () => false,
  setSelection: noop,
};
