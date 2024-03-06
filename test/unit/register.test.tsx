import "../../src/register";

import { expect } from "@assertive-ts/core";
import { render } from "@testing-library/react-native";
import { ActivityIndicator, Image, Modal, ScrollView, Text, TextInput, View } from "react-native";

describe("[Unit] register.test.ts", () => {
  context("when main is called", () => {
    it("mocks react native so it can render on Node.js", () => {
      const {
        getByText,
        getByPlaceholderText,
        getByDisplayValue,
        getByLabelText,
      } = render(
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
        </ScrollView>,
      );

      expect(getByLabelText("Loading")).toBePresent();
      expect(getByText("Hello world!")).toBePresent();
      expect(getByPlaceholderText("Say hello here...")).toBePresent();
      expect(getByDisplayValue("Hello :)")).toBePresent();
      expect(getByLabelText("Profile picture")).toBePresent();
      expect(getByText("I'm on a modal")).toBePresent();
      expect(() => getByText("foo")).toThrowError();
    });
  });
});
