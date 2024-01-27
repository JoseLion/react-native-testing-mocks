import { noop } from "../../helpers/commons";

export const LinkingMock = {
  addEventListener: noop,
  canOpenURL: (): Promise<boolean> => Promise.resolve(true),
  getInitialURL: (): Promise<void> => Promise.resolve(),
  openSettings: noop,
  openURL: noop,
  sendIntent: noop,
};
