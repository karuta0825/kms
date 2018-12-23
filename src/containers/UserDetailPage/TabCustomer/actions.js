import {
  EDIT_CANCEL,
  CHANGE_CUSTOMER_VALUE,
  SELECT_BASE_INDEX,
} from '../../../constants/ActionTypes';

export const cancelEdit = (name: string) => ({
  type: EDIT_CANCEL,
  payload: name,
});

export const changeValue = (key: string, value: any) => ({
  type: CHANGE_CUSTOMER_VALUE,
  payload: {
    key,
    value,
  },
});

export const selectBase = (index: number) => ({
  type: SELECT_BASE_INDEX,
  payload: index,
});
