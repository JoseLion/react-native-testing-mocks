import { Animated } from "react-native";

interface ValueXY {
  x: Animated.AnimatedValue | number;
  y: Animated.AnimatedValue | number;
}

export class AnimatedValueXYMock extends Animated.ValueXY {
  public constructor(
    value: ValueXY,
    config: Animated.AnimatedConfig = { useNativeDriver: false },
  ) {
    super(value, { ...config, useNativeDriver: false });
  }
}
