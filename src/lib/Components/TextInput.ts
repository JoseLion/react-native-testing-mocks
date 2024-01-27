import { TextInput } from "react-native";

import { noop } from "../../helpers/commons";
import { mockComponent } from "../../helpers/mockComponent";
import { MockNativeMethods } from "../../helpers/mockNativeMethods";

export const TextInputMock = mockComponent(TextInput, {
  ...MockNativeMethods,
  clear: noop,
  getNativeRef: noop,
  isFocused: noop,
});
