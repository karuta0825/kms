// @flow
import {
  SET_TAB_POSITION,
  FETCH_USERINFO,
  TOGGLE_EDIT_MODE,
} from '../../constants/ActionTypes';

export const changeTabIndex = (index: number) => ({
  type: SET_TAB_POSITION,
  payload: index,
});

export const getUserInfo = (id: number) => ({
  type: FETCH_USERINFO,
  payload: id,
});

export const toggleEditMode = (isEdit: boolean, tabName: string) => ({
  type: TOGGLE_EDIT_MODE,
  payload: { isEdit, tabName },
});
