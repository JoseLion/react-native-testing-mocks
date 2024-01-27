/* eslint-disable sort-keys */
import { noop } from "../../helpers/commons";

export const AccessibilityInfoMock = {
  addEventListener: noop,
  announceForAccessibility: noop,
  isAccessibilityServiceEnabled: noop,
  isBoldTextEnabled: noop,
  isGrayscaleEnabled: noop,
  isInvertColorsEnabled: noop,
  isReduceMotionEnabled: noop,
  prefersCrossFadeTransitions: noop,
  isReduceTransparencyEnabled: noop,
  isScreenReaderEnabled: (): Promise<boolean> => Promise.resolve(false),
  setAccessibilityFocus: noop,
  sendAccessibilityEvent: noop,
  getRecommendedTimeoutMillis: noop,
};
