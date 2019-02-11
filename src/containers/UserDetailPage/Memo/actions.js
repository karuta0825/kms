import {
  TOGGLE_MEMO_MODAL,
  CHANGE_MEMO_VALUE,
  SELECT_MEMO,
  CREATE_MEMO,
  FILTER_MEMO,
  SET_MEMO_TEMPLATE,
} from '../../../constants/ActionTypes';

export const toggleModal = (isOpen: boolean) => ({
  type: TOGGLE_MEMO_MODAL,
  payload: isOpen,
});

export const selectTemplate = (name: string) => ({
  type: SET_MEMO_TEMPLATE,
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

export const filterMemo = (name: MemoPriorityType) => ({
  type: FILTER_MEMO,
  payload: name,
});
