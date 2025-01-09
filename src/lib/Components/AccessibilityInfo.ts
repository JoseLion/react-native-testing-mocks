import { noop } from "../../helpers/commons";

export const AccessibilityInfoMock = {
  addEventListener: (): unknown => ({ remove: noop }),
  announceForAccessibility: noop,
  getRecommendedTimeoutMillis: noop,
  isAccessibilityServiceEnabled: noop,
  isBoldTextEnabled: noop,
  isGrayscaleEnabled: noop,
  isInvertColorsEnabled: noop,
  isReduceMotionEnabled: noop,
  isReduceTransparencyEnabled: noop,
  isScreenReaderEnabled: (): Promise<boolean> => Promise.resolve(false),
  prefersCrossFadeTransitions: noop,
  sendAccessibilityEvent: noop,
  setAccessibilityFocus: noop,
};
