import "../../src/main";

import { expect } from "@assertive-ts/core";
import { render } from "@testing-library/react-native";
import { Text, View } from "react-native";

describe("[Unit] main.test.ts", () => {
  context("when main is called", () => {
    it("mocks react native so it can render on Node.js", () => {
      const { getByText } = render(
        <View>
          <Text>{"Hello world!"}</Text>
        </View>,
      );

      expect(getByText("Hello world!")).toBePresent();
      expect(() => getByText("foo")).toThrowError();
    });
  });
});
