import { type HostComponent, type NativeMethods, TextInput } from "react-native";

import { noop } from "../../helpers/commons";
import { mockComponent } from "../../helpers/mockComponent";
import { nativeMethodsMock } from "../../helpers/nativeMethodsMock";

import type { ElementRef } from "react";

export type TextInputMethods = NativeMethods | TextInput & {
  getNativeRef: () => ElementRef<HostComponent<unknown>> | undefined;
};

export const textInputMethodsMock: TextInputMethods = {
  ...nativeMethodsMock,
  clear: noop,
  getNativeRef: () => undefined,
  isFocused: () => false,
  setSelection: noop,
};

export const TextInputMock = mockComponent(TextInput, textInputMethodsMock);
