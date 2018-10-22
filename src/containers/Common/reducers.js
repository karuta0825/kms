// @flow
import {
  CHANGE_MENU_TITLE,
  CHANGE_LOCATION,
} from '../../constants/ActionTypes';
import initState from '../../initState';

export const location = (state = initState.location, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_LOCATION:
      return payload;
    default:
      return state;
  }
};

export const header = (state = initState.header, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_MENU_TITLE:
      return {...state, title: payload};
    default:
      return state;
  }
};

