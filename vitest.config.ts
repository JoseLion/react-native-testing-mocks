import { defineConfig } from "vitest/config";

import { reactNativePlugin } from "./test/plugin";

export default defineConfig({
  plugins: [reactNativePlugin()],
  test: {
    include: ["test/**/*.test.ts?(x)"],
    setupFiles: "./test/setup.ts",
  },
});
