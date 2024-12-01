import { noop, replace } from "../helpers/commons";
import { mockNativeComponent } from "../helpers/mockNativeComponent";

import { LinkingMock } from "./Components/Linking";
import { NativeComponentRegistryMock } from "./Core/NativeComponentRegistry";
import { NativeModulesMock } from "./Core/NativeModules";
import { RendererProxyMock } from "./Core/RendererProxy";
import { UIManagerMock } from "./Core/UIManager";

Object.assign(global, { jest: { fn: () => noop } });

replace("react-native/Libraries/Core/InitializeCore", () => ({ }));
replace("react-native/Libraries/Core/NativeExceptionsManager", () => ({ }));
replace("react-native/Libraries/ReactNative/UIManager", () => UIManagerMock);
replace("react-native/Libraries/Linking/Linking", () => LinkingMock);
replace("react-native/Libraries/BatchedBridge/NativeModules", () => NativeModulesMock);
replace("react-native/Libraries/NativeComponent/NativeComponentRegistry", () => NativeComponentRegistryMock);
replace("react-native/Libraries/ReactNative/requireNativeComponent", () => ({ default: mockNativeComponent }));
replace("react-native/Libraries/ReactNative/RendererProxy", () => RendererProxyMock);
