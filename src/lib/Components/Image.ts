import { Image } from "react-native";

import { mockComponent } from "../../helpers/mockComponent";
import { imageMethodsMock } from "../../helpers/nativeMethodsMock";

import type { ComponentClass } from "react";

const Mock = mockComponent(Image as ComponentClass);

export const ImageMock = Object.assign(Mock, imageMethodsMock);
