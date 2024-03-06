import { ComponentClass } from "react";
import { Image } from "react-native";

import { noop } from "../../helpers/commons";
import { mockComponent } from "../../helpers/mockComponent";

export type ImageMethods = Partial<typeof Image>;

export const imageMethodsMock: ImageMethods = {
  getSize: noop,
  getSizeWithHeaders: noop,
  prefetch: () => Promise.resolve(false),
  prefetchWithMetadata: () => Promise.resolve(false),
  queryCache: () => Promise.resolve({ }),
  resolveAssetSource: () => ({
    height: 0,
    scale: 0,
    uri: "",
    width: 0,
  }),
};

const Mock = mockComponent(Image as ComponentClass);

export const ImageMock = Object.assign(Mock, imageMethodsMock);
