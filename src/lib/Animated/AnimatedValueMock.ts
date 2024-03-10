import { Animated } from "react-native";

export class AnimatedValueMock extends Animated.Value {

  public constructor(
    value: number,
    config: Animated.AnimatedConfig = { useNativeDriver: false },
  ) {
    super(value, { ...config, useNativeDriver: false });
  }
}
