/* eslint-disable sort-keys */
import { noop } from "../../helpers/commons";

export const UIManagerMock = {
  AndroidViewPager: {
    Commands: {
      setPage: noop,
      setPageWithoutAnimation: noop,
    },
  },
  blur: noop,
  createView: noop,
  customBubblingEventTypes: {},
  customDirectEventTypes: {},
  dispatchViewManagerCommand: noop,
  focus: noop,
  getViewManagerConfig: (name: string): unknown => {
    if (name === "AndroidDrawerLayout") {
      return {
        Constants: {
          DrawerPosition: {
            Left: 10,
          },
        },
      };
    }
    return undefined;
  },
  hasViewManagerConfig: (name: string): boolean => {
    return name === "AndroidDrawerLayout";
  },
  measure: noop,
  manageChildren: noop,
  setChildren: noop,
  updateView: noop,
  AndroidDrawerLayout: {
    Constants: {
      DrawerPosition: {
        Left: 10,
      },
    },
  },
  AndroidTextInput: {
    Commands: { },
  },
  ScrollView: {
    Constants: { },
  },
  View: {
    Constants: { },
  },
};
