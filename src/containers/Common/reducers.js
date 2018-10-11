// @flow
import {
  BAR_ANCHOR_ELEMENT,
  CHANGE_MENU_TITLE,
  TOGGLE_DRAWER,
} from '../../constants/ActionTypes';

type StateType = {
  anchorEl: ?string;
};

const initState = {
  anchorEl: null,
  menuTitle: 'Kid管理',
  drawerIsOpen: false,
};

export const bar = (state: StateType = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BAR_ANCHOR_ELEMENT:
      return {
        ...state,
        anchorEl: payload,
      };
    case CHANGE_MENU_TITLE:
      return {
        ...state,
        menuTitle: payload,
      };
    case TOGGLE_DRAWER:
      return {
        ...state,
        drawerIsOpen: payload,
      };
    default:
      return state;
  }
};

