/* eslint-disable camelcase */
import { ComponentClass } from "react";

import { noop } from "../../helpers/commons";
import { mockNativeComponent } from "../../helpers/mockNativeComponent";

export const NativeComponentRegistryMock = {
  get: (name: string): ComponentClass => mockNativeComponent(name),
  getWithFallback_DEPRECATED: (name: string): ComponentClass => mockNativeComponent(name),
  setRuntimeConfigProvider: noop,
};
