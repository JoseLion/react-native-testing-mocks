import { Animated } from "react-native";

import { AnimatedValueMock } from "./AnimatedValueMock";
import { AnimatedValueXYMock } from "./AnimatedValueXYMock";

export const AnimatedMock: typeof Animated = {
  ...Animated,
  Value: AnimatedValueMock,
  ValueXY: AnimatedValueXYMock,
};
