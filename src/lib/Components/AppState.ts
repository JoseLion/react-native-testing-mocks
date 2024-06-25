import { noop } from "../../helpers/commons";

import type { NativeEventSubscription } from "react-native";

export const AppStateMock = {
  addEventListener: (): NativeEventSubscription => ({ remove: noop }),
  currentState: noop,
  removeEventListener: noop,
};
