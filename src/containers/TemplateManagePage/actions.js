import {
  SELECT_MEMO_TEMPLATE,
  TOGGLE_NEW_MEMOTEMPLATE_MODE,
  CHANGE_MEMO_TEMPLATE_VALUE,
  TOGGLE_TEMPLATE_DELETE_MODAL,
} from '../../constants/ActionTypes';

export const selectTemplate = (idx: number) => ({
  type: SELECT_MEMO_TEMPLATE,
  payload: idx,
});

export const toggleNewAddMode = (isNew: boolean) => ({
  type: TOGGLE_NEW_MEMOTEMPLATE_MODE,
  payload: isNew,
});

export const changeValue = (key: string, value: any) => ({
  type: CHANGE_MEMO_TEMPLATE_VALUE,
  payload: { key, value },
});

export const toggleDeleteModal = (isOpen: boolean) => ({
  type: TOGGLE_TEMPLATE_DELETE_MODAL,
  payload: isOpen,
});
