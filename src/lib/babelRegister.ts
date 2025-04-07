import register from "@babel/register";

register({
  cache: false,
  extensions: [
    ".ios.js",
    ".ios.jsx",
    ".js",
    ".jsx",
  ],
  only: [/[/\\]node_modules[/\\](react-native|@react-native)[/\\]/],
  presets: ["module:@react-native/babel-preset"],
});
