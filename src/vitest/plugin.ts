import type { Plugin } from "vite";

export function reactNativePlugin(): Plugin {
  return {
    config: {
      handler: () => ({
        test: {
          environment: "./src/vitest/env.ts",
          globals: true,
          server: {
            deps: {
              external: [
                "react-native",
                "@react-native",
              ],
            },
          },
        },
      }),
    },
    enforce: "pre",
    name: "react-native-vite-plugin",
  };
}
