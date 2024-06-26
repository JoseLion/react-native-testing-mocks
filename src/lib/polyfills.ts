/* eslint-disable @typescript-eslint/no-var-requires */
import "@react-native/js-polyfills/error-guard";

// Suppress the `react-test-renderer` warnings until New Architecture and legacy
// mode are no longer supported by React Native.
Object.assign(global, {
  IS_REACT_ACT_ENVIRONMENT: true,
  IS_REACT_NATIVE_TEST_ENVIRONMENT: true,
});

Object.defineProperties(global, {
  __DEV__: {
    configurable: true,
    enumerable: true,
    value: true,
    writable: true,
  },
  cancelAnimationFrame: {
    configurable: true,
    enumerable: true,
    value: clearTimeout,
    writable: true,
  },
  nativeFabricUIManager: {
    configurable: true,
    enumerable: true,
    value: {},
    writable: true,
  },
  performance: {
    configurable: true,
    enumerable: true,
    value: {
      now: Date.now,
    },
    writable: true,
  },
  regeneratorRuntime: {
    configurable: true,
    enumerable: true,
    value: require("regenerator-runtime/runtime") as unknown,
    writable: true,
  },
  requestAnimationFrame: {
    configurable: true,
    enumerable: true,
    value: (callback: (ms: number) => void) => setTimeout(() => callback(Date.now()), 0),
    writable: true,
  },
  window: {
    configurable: true,
    enumerable: true,
    value: global,
    writable: true,
  },
});
