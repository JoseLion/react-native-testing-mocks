import register from "@babel/register";

register({
  cache: true,
  only: [/[/\\]node_modules[/\\](react-native|@react-native)[/\\]/],
  plugins: [
    ["extension-resolver", {
      extensions: [
        ".ios.js",
        ".ios.jsx",
        ".js",
        ".jsx",
      ],
    }],
  ],
  presets: ["module:@react-native/babel-preset"],
});
