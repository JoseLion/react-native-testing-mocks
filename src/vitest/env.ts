import { name } from "../../package.json";

import type { Environment } from "vitest/environments";

const reactNativeEnv: Environment = {
  name: "react-native",
  setup: async () => {
    await import(`${name}/register`);

    return { teardown: () => undefined };
  },
  transformMode: "ssr",
};

export default reactNativeEnv;
