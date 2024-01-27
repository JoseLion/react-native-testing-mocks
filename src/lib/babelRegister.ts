import register from "@babel/register";

register({
  cache: true,
  only: [/node_modules[/\\](react-native|@react-native).*/],
  plugins: [
    ["module-resolver", {
      resolvePath(sourcePath: string) {
        if (sourcePath.startsWith(".")) {
          const hastePaths = [
            "/Image",
            "/Platform",
            "/PlatformColorValueTypes",
            "/BaseViewConfig",
          ];

          return hastePaths.some(path => sourcePath.endsWith(path))
            ? `${sourcePath}.ios`
            : undefined;
        }

        return undefined;
      },
    }],
  ],
  presets: ["module:@react-native/babel-preset"],
});
