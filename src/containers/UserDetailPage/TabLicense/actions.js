import * as Types from '../../../constants/ActionTypes';

export const toggleEditMode = (isEdit: boolean, tabName: string) => ({
  type: Types.TOGGLE_EDIT_MODE,
  payload: { isEdit, tabName },
});

export const selectLicense = num => ({
  type: Types.SELECT_LICENSE,
  payload: num,
});

export const putLicenses = (kids_id: number, inputValues) => ({
  type: Types.HTTP_PUT_LICENSES,
  payload: { kids_id, inputValues },
});
