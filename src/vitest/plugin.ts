import { createRequire } from "module";
import path from "path";

import { name } from "../../package.json";

import type { Plugin } from "vitest/config";

interface ReactNativeVitestPluginOptions {
  /**
   * External dependencies that should not be processed by Vite in addition to
   * the following:
   *
   * ```
   * ["react-native", "@react-native"]
   * ```
   *
   * @default []
   */
  external?: Array<RegExp | string>;
}

/**
 * Creates a plugin that allows testing React Native code on Vitest.
 *
 * @param options Plugin configuration object.
 * @returns A Vitest plugin for React Native.
 */
export function reactNativeVitestPlugin(options: ReactNativeVitestPluginOptions = { }): Plugin {
  const { external = [] } = options;
  const require = createRequire(import.meta.url);
  const envPath = require.resolve(`${name}/vitest/env`);

  return {
    config: {
      handler: () => ({
        test: {
          environment: `./${path.relative("./", envPath)}`,
          globals: true,
          server: {
            deps: {
              external: [
                "react-native",
                "@react-native",
                ...external,
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
