import type { Environment } from "vitest";

const reactNativeEnv: Environment = {
  name: "react-native",
  setup: async () => {
    await import("../src/lib/babelRegister");
    await import("../src/load");

    return { teardown: () => undefined };
  },
  transformMode: "ssr",
};

export default reactNativeEnv;
