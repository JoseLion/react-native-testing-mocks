[![CI](https://github.com/JoseLion/react-native-testing-mocks/actions/workflows/ci.yml/badge.svg)](https://github.com/JoseLion/react-native-testing-mocks/actions/workflows/ci.yml)
[![CodeQL](https://github.com/JoseLion/react-native-testing-mocks/actions/workflows/codeql.yml/badge.svg)](https://github.com/JoseLion/react-native-testing-mocks/actions/workflows/codeql.yml)
[![Release](https://github.com/JoseLion/react-native-testing-mocks/actions/workflows/release.yml/badge.svg)](https://github.com/JoseLion/react-native-testing-mocks/actions/workflows/release.yml)
[![Known Vulnerabilities](https://snyk.io/test/github/JoseLion/react-native-testing-mocks/badge.svg)](https://snyk.io/test/github/JoseLion/react-native-testing-mocks)

# react-native-testing-mocks

React Native mocks for testing. Same as the internal Jest-based mocks, but simpler, faster, and decoupled of the Jest dependency.

## Why?

Testing on React Native is hard. This is mainly because of some modules and components which communicate directly to native code (iOS, Android, etc.) But in a testing environment like Node.js that native code is not available. The second reason testing is hard is beacause React Native code is not deliverd in a distributable manner. The code is mostly written in Flow, and there're a few modules that need to go throgh a haste map to be resolve (modules with `.ios.js` and `.android.js` prefix, but invoked without the prefix). React Native package does not privide a CommonJS transpiled version, so we can't just require the modules on a testing environment.

React Native solves this problem through [Jest](https://jestjs.io/). They provide Jest mocks for all those native modules, and because Jest transpiles the code before running it, they ensure to process Flow code and solve the haste map. This configuration is exported as a [Jest preset](https://github.com/facebook/react-native/blob/main/packages/react-native/jest-preset.js) t be used on your `jest.config.js` file. But what if you don't want to use Jest as your testing framework? What if you don't use Babel for testing, because you use TypeScript and `ts-node`? Is it even possible to test React Native code without Jest?

This library aims to solve this problem. It provides mocks just as React Native does, but in much faster/simpler way and without the need of Jest. It also transforms the React Native Flow code on the fly, and solves the haste map modules so don't have to worry about that either. Transforming on the fly takes a few seconds the first time, but then it get's cached and it gets 6x faster. Overall, this library makes it possible to test React Native in other frameworks, like [Mocha.js](https://mochajs.org/), etc.

## Usage

To register the testing mocks you just need to load the effect in a file that runs before all tests:

```ts
// setup.ts

import "react-native-testing-mocks/register";

// ...rest of your setup code
```

### With Mocha.js

Some frameworks like Mocha.js gives you a place to load setup modules. In Mocha you can do that with the `--require` CLI option, or using the `.mocharc.json` file:

```json
{
  "$schema": "https://json.schemastore.org/mocharc",
  "exit": true,
  "extension": ["ts", "tsx"],
  "recursive": true,
  "require": [
    "ts-node/register",
    "react-native-testing-mocks/register",
    "test/hooks.ts"
  ],
  "spec": ["test/**/*.test.*"]
}
```

## Something's missing?

Suggestions are always welcome! Please create an [issue](https://github.com/JoseLion/react-native-testing-mocks/issues/new) describing the request, feature, or bug. We'll try to look into it as soon as possible 🙂

## Contributions

Contributions are very welcome! To do so, please fork this repository and open a Pull Request to the `main` branch.

## License

[MIT License](https://github.com/JoseLion/react-native-testing-mocks/blob/main/LICENSE)
