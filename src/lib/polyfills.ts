/* eslint-disable @typescript-eslint/no-var-requires */
import "@react-native/js-polyfills/Object.es8";
import "@react-native/js-polyfills/error-guard";

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
