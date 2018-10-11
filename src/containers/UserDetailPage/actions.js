// @flow
import { SET_TAB_POSITION } from '../../constants/ActionTypes';

export const changeTabIndex = (index: number) => ({
  type: SET_TAB_POSITION,
  payload: index,
});
