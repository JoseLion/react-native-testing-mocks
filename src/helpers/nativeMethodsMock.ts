import { noop } from "./commons";

import type { NativeMethods } from "react-native";

export const nativeMethodsMock: NativeMethods = {
  blur: noop,
  focus: noop,
  measure: noop,
  measureInWindow: noop,
  measureLayout: noop,
  refs: { },
  setNativeProps: noop,
};
