import { noop } from "../../helpers/commons";

export const LinkingMock = {
  addEventListener: (): unknown => ({ remove: noop }),
  canOpenURL: (): Promise<boolean> => Promise.resolve(true),
  getInitialURL: (): Promise<void> => Promise.resolve(),
  openSettings: noop,
  openURL: noop,
  sendIntent: noop,
};
