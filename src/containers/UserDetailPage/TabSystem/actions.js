// @flow
import {
  CHANGE_BASEINFO_VALUE,
  ADD_BASEINFO_VALUE,
} from '../../../constants/ActionTypes';

export const changeValue = (key: string, value: any) => ({
  type: CHANGE_BASEINFO_VALUE,
  payload: {
    key,
    value,
  },
});

export const addValue = (key: string, num: number) => ({
  type: ADD_BASEINFO_VALUE,
  payload: {
    key,
    num,
  },
});
