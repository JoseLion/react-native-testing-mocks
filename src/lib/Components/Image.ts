import { ComponentClass } from "react";
import { Image } from "react-native";

import { noop } from "../../helpers/commons";
import { mockComponent } from "../../helpers/mockComponent";

const Mock = mockComponent(Image as ComponentClass);

export const ImageMock = Object.assign(Mock, {
  getSize: noop,
  getSizeWithHeaders: noop,
  prefetch: noop,
  prefetchWithMetadata: noop,
  queryCache: noop,
  resolveAssetSource: noop,
});
