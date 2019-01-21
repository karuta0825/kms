import {
  TOGGLE_MEMO_MODAL,
  SELECT_MEMO_TEMPLATE,
  CHANGE_MEMO_VALUE,
  SELECT_MEMO,
  CREATE_MEMO,
} from '../../../constants/ActionTypes';

export const toggleModal = (isOpen: boolean) => ({
  type: TOGGLE_MEMO_MODAL,
  payload: isOpen,
});

export const selectTemplate = (name: string) => ({
  type: SELECT_MEMO_TEMPLATE,
  payload: name,
});

export const changeValue = (key: string, value: any) => ({
  type: CHANGE_MEMO_VALUE,
  payload: { key, value },
});

export const selectMemo = (id: number) => ({
  type: SELECT_MEMO,
  payload: id,
});

export const createMemo = () => ({
  type: CREATE_MEMO,
  payload: {},
});
