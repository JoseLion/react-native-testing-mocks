import { Animated } from "react-native";

interface ValueXY {
  x: number | Animated.AnimatedValue;
  y: number | Animated.AnimatedValue;
}

export class AnimatedValueXYMock extends Animated.ValueXY {
  public constructor(
    value: ValueXY,
    config: Animated.AnimatedConfig = { useNativeDriver: false },
  ) {
    super(value, { ...config, useNativeDriver: false });
  }
}
