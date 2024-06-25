/* eslint-disable sort-keys */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { noop } from "../../helpers/commons";

type CB = (...args: unknown[]) => unknown;

export const NativeModulesMock = {
  AlertManager: {
    alertWithArgs: noop,
  },
  AsyncLocalStorage: {
    multiGet: (_keys: string, callback: CB) => process.nextTick(() => callback(null, [])),
    multiSet: (_entries: [], callback: CB) => process.nextTick(() => callback(null)),
    multiRemove: (_keys: string, callback: CB) => process.nextTick(() => callback(null)),
    multiMerge: (_entries: [], callback: CB) => process.nextTick(() => callback(null)),
    clear: (callback: CB) => process.nextTick(() => callback(null)),
    getAllKeys: (callback: CB) => process.nextTick(() => callback(null, [])),
  },
  DeviceInfo: {
    getConstants() {
      return {
        Dimensions: {
          window: {
            fontScale: 2,
            height: 1334,
            scale: 2,
            width: 750,
          },
          screen: {
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
  ImageLoader: {
    getSize: () => Promise.resolve([320, 240]),
    getSizeWithHeaders: () => Promise.resolve({ height: 222, width: 333 }),
    prefetchImage: noop,
    prefetchImageWithMetadata: noop,
    queryCache: noop,
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
    sendRequest: noop,
    abortRequest: noop,
    addListener: noop,
    removeListeners: noop,
  },
  PlatformConstants: {
    getConstants() {
      return { isTesting: true };
    },
  },
  PushNotificationManager: {
    presentLocalNotification: noop,
    scheduleLocalNotification: noop,
    cancelAllLocalNotifications: noop,
    removeAllDeliveredNotifications: noop,
    getDeliveredNotifications: () => process.nextTick(() => []),
    removeDeliveredNotifications: noop,
    setApplicationIconBadgeNumber: noop,
    getApplicationIconBadgeNumber: (callback: CB) => process.nextTick(() => callback(0)),
    cancelLocalNotifications: noop,
    getScheduledLocalNotifications: (callback: CB) => process.nextTick(() => callback()),
    requestPermissions: () => Promise.resolve({ alert: true, badge: true, sound: true }),
    abandonPermissions: noop,
    checkPermissions: (callback: CB) => process.nextTick(() => callback({ alert: true, badge: true, sound: true })),
    getInitialNotification: () => Promise.resolve(null),
    addListener: noop,
    removeListeners: noop,
  },
  SourceCode: {
    getConstants() {
      return {
        scriptURL: null,
      };
    },
  },
  StatusBarManager: {
    setColor: noop,
    setStyle: noop,
    setHidden: noop,
    setNetworkActivityIndicatorVisible: noop,
    setBackgroundColor: noop,
    setTranslucent: noop,
    getConstants: () => ({
      HEIGHT: 42,
    }),
  },
  Timing: {
    createTimer: noop,
    deleteTimer: noop,
  },
  UIManager: {},
  BlobModule: {
    getConstants: () => ({ BLOB_URI_SCHEME: "content", BLOB_URI_HOST: null }),
    addNetworkingHandler: noop,
    enableBlobSupport: noop,
    disableBlobSupport: noop,
    createFromParts: noop,
    sendBlob: noop,
    release: noop,
  },
  WebSocketModule: {
    connect: noop,
    send: noop,
    sendBinary: noop,
    ping: noop,
    close: noop,
    addListener: noop,
    removeListeners: noop,
  },
  I18nManager: {
    allowRTL: noop,
    forceRTL: noop,
    swapLeftAndRightInRTL: noop,
    getConstants: () => ({
      isRTL: false,
      doLeftAndRightSwapInRTL: true,
    }),
  },
};
