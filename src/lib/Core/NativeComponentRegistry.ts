/* eslint-disable camelcase */

import { noop } from "../../helpers/commons";
import { mockNativeComponent } from "../../helpers/mockNativeComponent";

import type { ComponentClass } from "react";

export const NativeComponentRegistryMock = {
  get: (name: string): ComponentClass => mockNativeComponent(name),
  getWithFallback_DEPRECATED: (name: string): ComponentClass => mockNativeComponent(name),
  setRuntimeConfigProvider: noop,
};
