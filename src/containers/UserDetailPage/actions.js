// @flow
import {
  SET_TAB_POSITION,
  FETCH_USERINFO,
} from '../../constants/ActionTypes';

export const changeTabIndex = (index: number) => ({
  type: SET_TAB_POSITION,
  payload: index,
});

export const getUserInfo = (id: number) => ({
  type: FETCH_USERINFO,
  payload: id,
});
