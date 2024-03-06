import { ElementRef } from "react";
import { HostComponent, NativeMethods, TextInput } from "react-native";

import { noop } from "../../helpers/commons";
import { mockComponent } from "../../helpers/mockComponent";
import { nativeMethodsMock } from "../../helpers/nativeMethodsMock";

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
