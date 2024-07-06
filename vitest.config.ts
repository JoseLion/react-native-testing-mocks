import { defineConfig } from "vitest/config";

import { reactNativeVitestPlugin } from "./test/plugin";

export default defineConfig({
  plugins: [reactNativeVitestPlugin()],
  test: {
    include: ["test/**/*.test.ts?(x)"],
    setupFiles: "./test/setup.ts",
  },
});
