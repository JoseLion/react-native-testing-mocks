import { NativeMethods } from "react-native";

import { noop } from "./commons";

export const nativeMethodsMock: NativeMethods = {
  blur: noop,
  focus: noop,
  measure: noop,
  measureInWindow: noop,
  measureLayout: noop,
  refs: { },
  setNativeProps: noop,
};
