// @flow
import * as Types from '../../../constants/ActionTypes';

export const selectHistory = (num: number) => ({
  type: Types.SELECT_HISTORY,
  payload: num,
});

export const filterHistory = (value: string) => ({
  type: Types.FILTER_HISTORY,
  payload: value,
});
