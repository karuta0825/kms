import {
  EDIT_CANCEL,
  CHANGE_CUSTOMER_VALUE,
  SELECT_BASE_INDEX,
  CHANGE_NEWBASE_MODE,
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

export const toggleNewAddMode = (isNewMode: boolean) => ({
  type: CHANGE_NEWBASE_MODE,
  payload: isNewMode,
});
