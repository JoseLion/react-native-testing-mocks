import { NativeEventSubscription } from "react-native";

import { noop } from "../../helpers/commons";

export const AppStateMock = {
  addEventListener: (): NativeEventSubscription => ({ remove: noop }),
  currentState: noop,
  removeEventListener: noop,
};
