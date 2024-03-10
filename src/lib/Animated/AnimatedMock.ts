import { Animated } from "react-native";

import { AnimatedValueMock } from "./AnimatedValueMock";
import { AnimatedValueXYMock } from "./AnimatedValueXY";

export const AnimatedMock: typeof Animated = {
  ...Animated,
  Value: AnimatedValueMock,
  ValueXY: AnimatedValueXYMock,
};
