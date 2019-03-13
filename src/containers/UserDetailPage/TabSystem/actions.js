// @flow
import * as Types from '../../../constants/ActionTypes';

export const changeValue = (key: string, value: any) => ({
  type: Types.CHANGE_BASEINFO_VALUE,
  payload: {
    key,
    value,
  },
});

export const addValue = (key: string, num: number) => ({
  type: Types.ADD_BASEINFO_VALUE,
  payload: {
    key,
    num,
  },
});

export const putKids = inputValues => ({
  type: Types.HTTP_PUT_KIDS,
  payload: inputValues,
});
