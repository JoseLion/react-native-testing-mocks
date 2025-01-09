import { noop } from "../../helpers/commons";

export const UIManagerMock = {
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
  manageChildren: noop,
  measure: noop,
  ScrollView: {
    Constants: { },
  },
  setChildren: noop,
  updateView: noop,
  View: {
    Constants: { },
  },
};
