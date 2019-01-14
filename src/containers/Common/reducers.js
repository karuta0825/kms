// @flow
import {
  CHANGE_MENU_TITLE,
  CHANGE_LOCATION,
  SUCCESSED_FETCH_USERINFO,
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

export const header = (
  state: { title: string },
  action: Action
): { title: string } => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_MENU_TITLE:
      return { title: payload };
    case SUCCESSED_FETCH_USERINFO: {
      const { kid, user_name } = payload.baseInfo[0];
      return { title: `${kid} ${user_name}` };
    }
    default:
      return state;
  }
};
