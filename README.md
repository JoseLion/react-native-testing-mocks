[![CI](https://github.com/JoseLion/react-native-testing-mocks/actions/workflows/ci.yml/badge.svg)](https://github.com/JoseLion/react-native-testing-mocks/actions/workflows/ci.yml)
[![CodeQL](https://github.com/JoseLion/react-native-testing-mocks/actions/workflows/codeql.yml/badge.svg)](https://github.com/JoseLion/react-native-testing-mocks/actions/workflows/codeql.yml)
[![Release](https://github.com/JoseLion/react-native-testing-mocks/actions/workflows/release.yml/badge.svg)](https://github.com/JoseLion/react-native-testing-mocks/actions/workflows/release.yml)
[![NPM version](https://img.shields.io/npm/v/react-native-testing-mocks?logo=npm)](https://www.npmjs.com/package/react-native-testing-mocks)
[![NPM bundle size](https://img.shields.io/bundlephobia/min/react-native-testing-mocks)](https://www.npmjs.com/package/react-native-testing-mocks)
[![NPM downloads](https://img.shields.io/npm/dm/react-native-testing-mocks)](https://www.npmjs.com/package/react-native-testing-mocks)
[![NPM license](https://img.shields.io/npm/l/react-native-testing-mocks)](https://github.com/JoseLion/react-native-testing-mocks/blob/main/LICENSE)
[![GitHub Release Date](https://img.shields.io/github/release-date/JoseLion/react-native-testing-mocks)](https://github.com/JoseLion/react-native-testing-mocks/releases)
[![Known Vulnerabilities](https://snyk.io/test/github/JoseLion/react-native-testing-mocks/badge.svg)](https://snyk.io/test/github/JoseLion/react-native-testing-mocks)

# React Native Testing Mocks

React Native mocks for testing. It is the same as the internal Jest-based mocks but is more straightforward, faster, and decoupled from the Jest dependency.

## Motivation

Testing on React Native is not such a trivial task, mainly because some modules and components communicate directly to native code (iOS, Android, etc.) However, in a testing environment like Node.js, the native code is unavailable. Also, React Native code is not delivered in a distributable manner -- most of the code in Flow, and some modules need to go through a haste map resolver (modules with `.ios.js` and `.android.js` prefix, required without the prefix).

React Native solves this problem through [Jest](https://jestjs.io/), providing Jest mocks for native modules. Jest transpiles the code before running it, so there's also a Flow preset in the configuration and some settings to solve the haste map. React Native then exports this configuration as a [Jest preset](https://github.com/facebook/react-native/blob/main/packages/react-native/jest-preset.js) for developers to use with their Jest configuration.

But what if you don't want to use Jest as your testing framework? What if you don't need Babel because you already have TypeScript, and your test can run on [ts-node](https://typestrong.org/ts-node/)? Is it even possible to test React Native code without Jest? This package aims to solve this problem by providing mocks the same way as React Native does but without Jest dependency in the middle. It solves the "haste map" modules and transforms Flow code on the fly, caching the result so subsequent executions are 6x faster. Overall, the package makes it possible to test React Native in other frameworks, like [Mocha.js](https://mochajs.org/).

## Table of contents

- [React Native Testing Mocks](#react-native-testing-mocks)
  - [Motivation](#motivation)
  - [Table of contents](#table-of-contents)
    - [Features](#features)
  - [Requirements](#requirements)
  - [Install](#install)
  - [Usage](#usage)
    - [With Vitest](#with-vitest)
    - [With Mocha](#with-mocha)
    - [Mocking native methods](#mocking-native-methods)
  - [Contributing](#contributing)
    - [Something's missing?](#somethings-missing)
    - [Contributions](#contributions)
  - [License](#license)

### Features

- Fast and simple. It transforms just what it needs when it needs it.
  - **6x** faster _before_ cache.
  - **12x** faster _after_ cache.
- Compatible with [@testing-library/react-native](https://callstack.github.io/react-native-testing-library/) renderer.
- Extensive range of compatibility by imitating React Native's original mocks.
- Testing framework agnostic.
- Easy to use and set up.
- It provides a function to add behaviors to the native methods of Native Components.

## Requirements

- **Node.js:** >=18 <=22.6
- **react:** >=18.2.0
- **react-native:** ">=0.73.2

> **NOTE:** Node.js [enabled the `--experimental-detect-module` flag](https://github.com/nodejs/node/releases/tag/v22.7.0) on v22.7.0 by default. This raises an issue when transforming Flow code with Babel, so we're not supporting v22.7+ until the flag remains experimental and all issues are resolved.

## Install

With NPM:
```
npm i --save-dev react-native-testing-mocks
```

With Yarn:
```
yarn add --dev react-native-testing-mocks
```

## Usage

To register the testing mocks, load the effect in a file that runs before all tests:

```ts
// setup.ts

import "react-native-testing-mocks/register";

// ...rest of your setup code
```

### With Vitest

Ideally, Vitest should be able to replace Babel when it comes to resolving and transforming the React Native code. However, so much more goes on in [@react-native/babel-preset](https://www.npmjs.com/package/@react-native/babel-preset) that replacing this module with Vite is not only a hard task but also increases the risk of something going wrong. So, until React Native delivers their code in a more conventional format (CommonJS/ESM), is my opinion that it's safer to keep using Babel to transform React Native's code with Vitest.

That being said, this package also provides a Vite Plugin you can add to your `vitest.config.ts` configuration file:

```ts
import { reactNativeVitestPlugin } from "react-native-testing-mocks/vitest";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [reactNativeVitestPlugin()],
  test: {
    include: ["test/**/*.test.ts?(x)"],
    setupFiles: "./test/setup.ts",
  },
});
```

### With Mocha

Some frameworks like Mocha provide a mechanism to require modules during the Node.js execution. For instance, you can use the `--require` CLI option:

```bash
mocha --require react-native-testing-mocks/register
```

Or you can add it to the `.mocharc.json` file:

```json
{
  "$schema": "https://json.schemastore.org/mocharc",
  "exit": true,
  "extension": ["ts", "tsx"],
  "recursive": true,
  "require": [
    "ts-node/register",
    "react-native-testing-mocks/register",
    "./test/setup.ts"
  ],
  "spec": ["test/**/*.test.ts?(x)"]
}
```

### Mocking native methods

Native components like `View`, `ScrollView`, or `TextInput` have specific instance methods that help communicate between JS and native code. Because there's no native code on tests, we must mock these native methods somehow. By default, the methods mocks are just a "no-operation" function, meaning nothing happens whenever a component invokes them in a test environment.

However, your components may be using these methods in their implementation, and it'd be good to be able to test that as well. _React Native Testing Mocks_ provides the `mockNative` function that allows you to change the default native methods mocks on native components. Let's say your component uses the `.measure` instance method of a `<View>` component. Before you run your test, you can change the mocked behavior of `.measure` like so:

```ts
mockNative("View", { measure: callback => { callback(10, 10, 100, 100) } });
```

Now, whenever a test invokes the `.measure` method of any `View` instance, it will use your implementation instead. Remember that mocks persist until the program finishes, but you can restore the original behavior called `restoreNativeMocks()`. You can add the method to a before hook to ensure restoration after each test:

```ts
afterEach(() => {
  restoreNativeMocks();
});
```

## Contributing

### Something's missing?

Suggestions are always welcome! Please create an [issue](https://github.com/JoseLion/react-native-testing-mocks/issues/new) describing the request, feature, or bug. Opening meaningful issues is as helpful as opening Pull Requests.

### Contributions

Pull Requests are very welcome as well! Please fork this repository and open your PR against the `main` branch.

## License

[MIT License](https://github.com/JoseLion/react-native-testing-mocks/blob/main/LICENSE)
