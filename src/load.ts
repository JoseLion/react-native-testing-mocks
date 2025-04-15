import "./lib/babelRegister";
import "./lib/polyfills";
import "./lib/coreMocks";

import { replace } from "./helpers/commons";
import { AnimatedMock } from "./lib/Animated/AnimatedMock";
import { AccessibilityInfoMock } from "./lib/Components/AccessibilityInfo";
import { ActivityIndicatorMock } from "./lib/Components/ActivityIndicator";
import { AppStateMock } from "./lib/Components/AppState";
import { ClipboardMock } from "./lib/Components/Clipboard";
import { ImageMock } from "./lib/Components/Image";
import { ModalMock } from "./lib/Components/Modal";
import { RefreshControlMock } from "./lib/Components/RefreshControl";
import { ScrollViewMock } from "./lib/Components/ScrollView";
import { TextMock } from "./lib/Components/Text";
import { TextInputMock } from "./lib/Components/TextInput";
import { VibrationMock } from "./lib/Components/Vibration";
import { ViewMock } from "./lib/Components/View";
import { ViewNativeComponentMock } from "./lib/Components/ViewNativeComponent";

const libs = "react-native/Libraries";

replace(`${libs}/Image/Image`, () => ({ default: ImageMock }));
replace(`${libs}/Text/Text`, () => ({ default: TextMock }));
replace(`${libs}/Components/TextInput/TextInput`, () => ({ default: TextInputMock }));
replace(`${libs}/Modal/Modal`, () => ({ default: ModalMock }));
replace(`${libs}/Components/AccessibilityInfo/AccessibilityInfo`, () => ({ default: AccessibilityInfoMock }));
replace(`${libs}/Components/Clipboard/Clipboard`, () => ({ default: ClipboardMock }));
replace(`${libs}/Components/RefreshControl/RefreshControl`, () => ({ default: RefreshControlMock }));
replace(`${libs}/Components/ScrollView/ScrollView`, () => ({ default: ScrollViewMock }));
replace(`${libs}/Components/ActivityIndicator/ActivityIndicator`, () => ({ default: ActivityIndicatorMock }));
replace(`${libs}/AppState/AppState`, () => ({ default: AppStateMock }));
replace(`${libs}/Vibration/Vibration`, () => ({ default: VibrationMock }));
replace(`${libs}/Components/View/View`, () => ({ default: ViewMock }));
replace(`${libs}/Components/View/ViewNativeComponent`, () => ViewNativeComponentMock);
replace(`${libs}/Animated/Animated`, () => ({ default: AnimatedMock }));

export { };
