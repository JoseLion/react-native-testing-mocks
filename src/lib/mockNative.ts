/* eslint-disable sonarjs/prefer-object-spread */
import { createRequire } from "module";

import { match } from "ts-pattern";

import { replace } from "../helpers/commons";
import { logger } from "../helpers/logger";
import { type AllNativeMethods, mockComponent } from "../helpers/mockComponent";
import {
  type ImageMethods,
  type ScrollViewMethods,
  type TextInputMethods,
  imageMethodsMock,
  nativeMethodsMock,
  scrollViewMethodsMock,
  textInputMethodsMock,
} from "../helpers/nativeMethodsMock";

import type { ComponentClass, PropsWithChildren } from "react";
import type { NativeMethods } from "react-native";

export type NativeBase =
  | "ActivityIndicator"
  | "Modal"
  | "Text"
  | "View";

export type NativeKey =
  | "Image"
  | "ScrollView"
  | "TextInput"
  | NativeBase;

const require = createRequire(import.meta.url);

const MOCKS: Set<NativeKey> = new Set();

const PATHS: Record<NativeKey, string> = {
  ActivityIndicator: "react-native/Libraries/Components/ActivityIndicator/ActivityIndicator",
  Image: "react-native/Libraries/Image/Image",
  Modal: "react-native/Libraries/Modal/Modal",
  ScrollView: "react-native/Libraries/Components/ScrollView/ScrollView",
  Text: "react-native/Libraries/Text/Text",
  TextInput: "react-native/Libraries/Components/TextInput/TextInput",
  View: "react-native/Libraries/Components/View/View",
};

/**
 * Allows you to change the behavior of native methods for certain components.
 * You can restore all behaviors to their original mocks using
 * {@link restoreNativeMocks} function.
 *
 * @param options type of component and native methods
 */
export function mockNative(type: "TextInput", methods: Partial<TextInputMethods>): void;
export function mockNative(type: "ScrollView", methods: Partial<ScrollViewMethods>): void;
export function mockNative(type: "Image", methods: Partial<ImageMethods>): void;
export function mockNative(type: NativeBase, methods: Partial<NativeMethods>): void;
export function mockNative(type: NativeKey, methods: Partial<AllNativeMethods | ImageMethods>): void {
  const path = PATHS[type];
  const Comp = require(path) as ComponentClass<PropsWithChildren<unknown>>;

  const Mock = match(type)
    .with("Image", () => Object.assign(Comp, { ...imageMethodsMock, ...methods }))
    .with("ScrollView", () => mockComponent(Comp, Object.assign({ }, scrollViewMethodsMock, methods)))
    .with("TextInput", () => mockComponent(Comp, Object.assign({ }, textInputMethodsMock, methods)))
    .otherwise(() => mockComponent(Comp, Object.assign({ }, nativeMethodsMock, methods)));

  replace(path, () => type === "ActivityIndicator" ? { default: Mock } : Mock);
  MOCKS.add(type);
  logger.replace(`Native methods mocks assigned to ${type}.`);
}

/**
 * Restore the native methods behavior off all native components to their
 * original mocks.
 */
export function restoreNativeMocks(): void {
  MOCKS.forEach(type => {
    const path = PATHS[type];
    const Comp = require(path) as ComponentClass<PropsWithChildren<unknown>>;
    const Mock = match(type)
      .with("Image", () => Object.assign(Comp, imageMethodsMock))
      .with("ScrollView", () => mockComponent(Comp, scrollViewMethodsMock))
      .with("TextInput", () => mockComponent(Comp, textInputMethodsMock))
      .otherwise(() => mockComponent(Comp, nativeMethodsMock));

    replace(path, () => type === "ActivityIndicator" ? { default: Mock } : Mock);
  });

  MOCKS.clear();
  logger.replace("All native methods mocks restored!");
}
