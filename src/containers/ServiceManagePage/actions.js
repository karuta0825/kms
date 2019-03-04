import * as Types from '../../constants/ActionTypes';

export const selectVersion = (version: string) => ({
  type: Types.SELECT_SERVICE_VERSION,
  payload: version,
});

export const toggleEditMode = (isEdit: boolean) => ({
  type: Types.TOGGLE_SERVICE_EDIT_MODE,
  payload: isEdit,
});

export const selectService = (selection: Array<number>) => ({
  type: Types.SELECT_SERVICE,
  payload: selection,
});

export const updateRows = changeRowsInfo => ({
  type: Types.CHANGE_SERVICE_VALUE,
  payload: changeRowsInfo,
});

export const changeValues = (obj: { [key: string]: any }) => ({
  type: Types.INPUT_SERVICE,
  payload: obj,
});
