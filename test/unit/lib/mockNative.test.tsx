import "../../../src/register";

import { expect } from "@assertive-ts/core";
import { render } from "@testing-library/react-native";
import { ReactElement, useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";

import { mockNative, restoreNativeMocks } from "../../../src/lib/mockNative";

function TestScreen(): ReactElement {

  const [widthValue, setWidthValue] = useState(0);
  const viewRef = useRef<View>(null);

  useEffect(() => {
    viewRef.current?.measure((_x, _y, width) => {
      setWidthValue(width);
    });
  }, []);

  return (
    <View ref={viewRef}>
      <Text>{`Measured width: ${widthValue}`}</Text>
    </View>
  );
}

describe("[Unit] mockNative.test.tsx", () => {
  afterEach(restoreNativeMocks);

  describe(".mockNative", () => {
    it("change the behavior of native methods", () => {
      mockNative("View", { measure: cb => cb(0, 0, 50, 0, 0, 0) });
      const { getByText } = render(<TestScreen />);

      expect(getByText("Measured width: 50")).toBePresent();
    });
  });

  describe(".restoreNativeMocks", () => {
    it("restores the behavior of native methods to their original mocks", () => {
      mockNative("View", { measure: cb => cb(0, 0, 100, 0, 0, 0) });
      const init = render(<TestScreen />);

      expect(init.getByText("Measured width: 100")).toBePresent();

      restoreNativeMocks();
      const next = render(<TestScreen />);

      expect(next.getByText("Measured width: 0")).toBePresent();
    });
  });
});
