import { noop } from "../../helpers/commons";

export const ClipboardMock = {
  getString: (): string => "",
  setString: noop,
};
