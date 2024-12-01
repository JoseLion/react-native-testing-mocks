import { expect } from "@assertive-ts/core";
import { render, userEvent, waitFor } from "@testing-library/react-native";
import { type ReactElement, useCallback, useRef, useState } from "react";
import { ActivityIndicator, Animated, Button, Image, Modal, ScrollView, Text, TextInput, View } from "react-native";
import { Rect, Svg } from "react-native-svg";
import { describe, it, suite } from "vitest";

function TestScreen(): ReactElement {
  const [animated, setAnimated] = useState(false);
  const [greet, setGreet] = useState("Hello!");

  const enterLeft = useRef(new Animated.Value(100, { useNativeDriver: true })).current;
  const movePoint = useRef(new Animated.ValueXY({ x: 0, y: 0 }, { useNativeDriver: true })).current;

  const animateView = useCallback(() => {
    const enterAnim = Animated.timing(enterLeft, {
      duration: 100,
      toValue: 0,
      useNativeDriver: true,
    });
    const moveAnim = Animated.spring(movePoint, {
      damping: 45,
      mass: 4,
      stiffness: 350,
      toValue: { x: 50, y: 10 },
      useNativeDriver: true,
    });

    Animated.parallel([enterAnim, moveAnim]).start(({ finished }) => {
      setAnimated(finished);
    });
  }, []);

  const changeGreet = useCallback(() => {
    setGreet("I said hello!!!");
  }, []);

  return (
    <ScrollView>
      <View>
        <ActivityIndicator aria-label="Loading" animating={true} />
        <Text>{"Hello world!"}</Text>
        <TextInput placeholder="Say hello here..." value="Hello :)" />
        <Image alt="Profile picture" />
        <Modal visible={true}>
          <Text>{"I'm on a modal"}</Text>
        </Modal>
        <Modal visible={false}>
          <Text>{"foo"}</Text>
        </Modal>
      </View>
      <Svg testID="svg-test">
        <Rect
          x={0}
          y={0}
          width={100}
          height={100}
          fill="red"
        />
      </Svg>
      <Button title="Click Me!" onPress={animateView} />
      <Animated.View style={{ marginLeft: enterLeft }}>
        <Text>{`Animated view: ${animated}`}</Text>
      </Animated.View>
      <Button title="Long press me!" onPress={changeGreet} />
      <Text>{greet}</Text>
    </ScrollView>
  );
}

suite("[Unit] register.test.ts", () => {
  describe("when main is called", () => {
    it("mocks react native so it can render on Node.js", async () => {
      const {
        findByText,
        getByDisplayValue,
        getByLabelText,
        getByPlaceholderText,
        getByTestId,
        getByText,
      } = render(<TestScreen />);

      expect(getByLabelText("Loading")).toBePresent();
      expect(getByText("Hello world!")).toBePresent();
      expect(getByPlaceholderText("Say hello here...")).toBePresent();
      expect(getByDisplayValue("Hello :)")).toBePresent();
      expect(getByLabelText("Profile picture")).toBePresent();
      expect(getByText("I'm on a modal")).toBePresent();
      expect(() => getByText("foo")).toThrowError();
      expect(getByTestId("svg-test")).toBePresent();
      expect(getByText("Animated view: false")).toBePresent();

      const clickMeButton = await findByText("Click Me!");

      await userEvent.press(clickMeButton);

      await waitFor(() => getByText("Animated view: true"));

      const longPressButton = await findByText("Long press me!");

      expect(getByText("Hello!")).toBePresent();

      await userEvent.longPress(longPressButton);

      await waitFor(() => getByText("I said hello!!!"));
    });
  });
});
