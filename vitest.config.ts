import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    include: ["test/**/*.test.ts?(x)"],
    server: {
      deps: {
        external: [
          "react-native",
          "@react-native",
        ],
      },
    },
    setupFiles: [
      "./src/register.ts",
      "./test/setup.ts",
    ],
  },
});
