import {
  TOGGLE_EDIT_MODE,
  SELECT_CLIENT,
  CHANGE_CLIENT_INFO,
} from '../../../constants/ActionTypes';

export const toggleEditMode = (
  isEdit: boolean,
  tabName: string
) => ({
  type: TOGGLE_EDIT_MODE,
  payload: { isEdit, tabName },
});

export const selectClient = num => ({
  type: SELECT_CLIENT,
  payload: num,
});

export const updateRows = changeRowsInfo => ({
  type: CHANGE_CLIENT_INFO,
  payload: changeRowsInfo,
});
