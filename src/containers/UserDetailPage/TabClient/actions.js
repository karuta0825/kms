import {
  TOGGLE_EDIT_MODE,
  SELECT_CLIENT,
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
