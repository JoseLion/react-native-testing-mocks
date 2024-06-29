import { userEvent } from "@testing-library/react-native";
import Sinon from "sinon";
import { afterEach, beforeEach } from "vitest";

process.env.RNTL_SKIP_AUTO_DETECT_FAKE_TIMERS = "true";

const newUserEvent = userEvent.setup({
  advanceTimers: delay => Sinon.clock.tickAsync(delay).then(),
  delay: 0,
});

Object.assign(userEvent, newUserEvent);

beforeEach(() => {
  Sinon.useFakeTimers({
    advanceTimeDelta: 0,
    shouldAdvanceTime: true,
  });
});

afterEach(() => {
  Sinon.restore();
});
