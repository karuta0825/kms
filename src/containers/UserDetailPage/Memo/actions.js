import * as Types from '../../../constants/ActionTypes';

export const selectTemplate = (name: string) => ({
  type: Types.SET_MEMO_TEMPLATE,
  payload: name,
});

export const changeValue = (key: string, value: any) => ({
  type: Types.CHANGE_MEMO_VALUE,
  payload: { key, value },
});

export const selectMemo = (id: number) => ({
  type: Types.SELECT_MEMO,
  payload: id,
});

export const createMemo = () => ({
  type: Types.CREATE_MEMO,
  payload: {},
});

export const filterMemo = (name: MemoPriorityType) => ({
  type: Types.FILTER_MEMO,
  payload: name,
});

export const postMemo = (kids_id: number, inputValues: MemoType) => ({
  type: Types.HTTP_POST_MEMOS,
  payload: { kids_id, inputValues },
});

export const deleteMemo = (kids_id: number, id: number) => ({
  type: Types.HTTP_DELETE_MEMOS,
  payload: { kids_id, id },
});

export const putMemo = (
  kids_id: number,
  id: number,
  inputValues
) => ({
  type: Types.HTTP_PUT_MEMOS,
  payload: { kids_id, id, inputValues },
});
