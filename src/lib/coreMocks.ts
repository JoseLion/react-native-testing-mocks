import { noop, replace, replaceEsm } from "../helpers/commons";
import { mockNativeComponent } from "../helpers/mockNativeComponent";

import { NativeComponentRegistryMock } from "./Core/NativeComponentRegistry";
import { NativeModulesMock } from "./Core/NativeModules";
import { UIManagerMock } from "./Core/UIManager";
import { verifyComponentAttrEqMock } from "./Core/verifyComponentAttributeEquivalence";

Object.assign(global, { jest: { fn: () => noop } });

replace("react-native/Libraries/Core/InitializeCore", { });
replace("react-native/Libraries/Core/NativeExceptionsManager", { });
replace("react-native/Libraries/ReactNative/UIManager", UIManagerMock);
replace("react-native/Libraries/BatchedBridge/NativeModules", NativeModulesMock);
replace("react-native/Libraries/NativeComponent/NativeComponentRegistry", NativeComponentRegistryMock);
replaceEsm("react-native/Libraries/ReactNative/requireNativeComponent", mockNativeComponent);
replace("react-native/Libraries/Utilities/verifyComponentAttributeEquivalence", verifyComponentAttrEqMock);
replace(
  "react-native/Libraries/ReactNative/RendererProxy",
  "react-native/Libraries/ReactNative/RendererImplementation",
);
