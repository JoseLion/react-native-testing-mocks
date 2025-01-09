/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { noop } from "../../helpers/commons";

type CB = (...args: unknown[]) => unknown;

export const NativeModulesMock = {
  AlertManager: {
    alertWithArgs: noop,
  },
  AsyncLocalStorage: {
    clear: (callback: CB) => process.nextTick(() => callback(null)),
    getAllKeys: (callback: CB) => process.nextTick(() => callback(null, [])),
    multiGet: (_keys: string, callback: CB) => process.nextTick(() => callback(null, [])),
    multiMerge: (_entries: [], callback: CB) => process.nextTick(() => callback(null)),
    multiRemove: (_keys: string, callback: CB) => process.nextTick(() => callback(null)),
    multiSet: (_entries: [], callback: CB) => process.nextTick(() => callback(null)),
  },
  BlobModule: {
    addNetworkingHandler: noop,
    createFromParts: noop,
    disableBlobSupport: noop,
    enableBlobSupport: noop,
    getConstants: () => ({ BLOB_URI_HOST: null, BLOB_URI_SCHEME: "content" }),
    release: noop,
    sendBlob: noop,
  },
  DeviceInfo: {
    getConstants() {
      return {
        Dimensions: {
          screen: {
            fontScale: 2,
            height: 1334,
            scale: 2,
            width: 750,
          },
          window: {
            fontScale: 2,
            height: 1334,
            scale: 2,
            width: 750,
          },
        },
      };
    },
  },
  DevSettings: {
    addMenuItem: noop,
    reload: noop,
  },
  I18nManager: {
    allowRTL: noop,
    forceRTL: noop,
    getConstants: () => ({
      doLeftAndRightSwapInRTL: true,
      isRTL: false,
    }),
    swapLeftAndRightInRTL: noop,
  },
  ImageLoader: {
    getSize: () => Promise.resolve([320, 240]),
    prefetchImage: noop,
  },
  ImageViewManager: {
    getSize: (_uri: string, success: CB) => process.nextTick(() => success(320, 240)),
    prefetchImage: noop,
  },
  KeyboardObserver: {
    addListener: noop,
    removeListeners: noop,
  },
  Networking: {
    abortRequest: noop,
    addListener: noop,
    removeListeners: noop,
    sendRequest: noop,
  },
  PlatformConstants: {
    getConstants() {
      return {
        isTesting: true,
        reactNativeVersion: {
          major: 1000,
          minor: 0,
          patch: 0,
          prerelease: undefined,
        },
      };
    },
  },
  PushNotificationManager: {
    abandonPermissions: noop,
    addListener: noop,
    cancelAllLocalNotifications: noop,
    cancelLocalNotifications: noop,
    checkPermissions: (callback: CB) => process.nextTick(() => callback({ alert: true, badge: true, sound: true })),
    getApplicationIconBadgeNumber: (callback: CB) => process.nextTick(() => callback(0)),
    getDeliveredNotifications: () => process.nextTick(() => []),
    getInitialNotification: () => Promise.resolve(null),
    getScheduledLocalNotifications: (callback: CB) => process.nextTick(() => callback()),
    presentLocalNotification: noop,
    removeAllDeliveredNotifications: noop,
    removeDeliveredNotifications: noop,
    removeListeners: noop,
    requestPermissions: () => Promise.resolve({ alert: true, badge: true, sound: true }),
    scheduleLocalNotification: noop,
    setApplicationIconBadgeNumber: noop,
  },
  SourceCode: {
    getConstants() {
      return {
        scriptURL: null,
      };
    },
  },
  StatusBarManager: {
    getConstants: () => ({
      HEIGHT: 42,
    }),
    setBackgroundColor: noop,
    setColor: noop,
    setHidden: noop,
    setNetworkActivityIndicatorVisible: noop,
    setStyle: noop,
    setTranslucent: noop,
  },
  Timing: {
    createTimer: noop,
    deleteTimer: noop,
  },
  UIManager: {},
  WebSocketModule: {
    addListener: noop,
    close: noop,
    connect: noop,
    ping: noop,
    removeListeners: noop,
    send: noop,
    sendBinary: noop,
  },
};
