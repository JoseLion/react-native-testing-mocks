import type { Environment } from "vitest/environments";

const reactNativeEnv: Environment = {
  name: "react-native",
  setup: async () => {
    await import("../src/load");

    return { teardown: () => undefined };
  },
  transformMode: "ssr",
};

export default reactNativeEnv;
