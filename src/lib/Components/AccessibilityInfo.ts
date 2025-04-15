import { noop } from "../../helpers/commons";

export const AccessibilityInfoMock = {
  addEventListener: (): unknown => ({ remove: noop }),
  announceForAccessibility: noop,
  announceForAccessibilityWithOptions: noop,
  getRecommendedTimeoutMillis: noop,
  isAccessibilityServiceEnabled: noop,
  isBoldTextEnabled: noop,
  isDarkerSystemColorsEnabled: (): Promise<boolean> => Promise.resolve(false),
  isGrayscaleEnabled: noop,
  isHighTextContrastEnabled: (): Promise<boolean> => Promise.resolve(false),
  isInvertColorsEnabled: noop,
  isReduceMotionEnabled: noop,
  isReduceTransparencyEnabled: noop,
  isScreenReaderEnabled: (): Promise<boolean> => Promise.resolve(false),
  prefersCrossFadeTransitions: noop,
  sendAccessibilityEvent: noop,
  setAccessibilityFocus: noop,
};
