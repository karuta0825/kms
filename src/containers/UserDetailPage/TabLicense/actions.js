import {
  SELECT_LICENSE,
  TOGGLE_EDIT_MODE,
} from '../../../constants/ActionTypes';

export const toggleEditMode = (
  isEdit: boolean,
  tabName: string
) => ({
  type: TOGGLE_EDIT_MODE,
  payload: { isEdit, tabName },
});

export const selectLicense = num => ({
  type: SELECT_LICENSE,
  payload: num,
});
