import type { Plugin } from "vite";

export function reactNativeVitestPlugin(): Plugin {
  return {
    config: {
      handler: () => ({
        test: {
          environment: "./test/env.ts",
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
