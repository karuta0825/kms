import * as Types from '../../constants/ActionTypes';

export const selectProject = (projectName: string) => ({
  type: Types.SELECT_PROJECT,
  payload: projectName,
});

export const toggleEditMode = (isEdit: boolean) => ({
  type: Types.TOGGLE_SERVER_EDIT_MODE,
  payload: isEdit,
});

export const selectServers = (selection: Array<number>) => ({
  type: Types.SELECT_SERVERS,
  payload: selection,
});

export const updateRows = rowChanges => ({
  type: Types.CHANGE_SERVER_VALUE,
  payload: rowChanges,
});

export const putServers = rowChanges => ({
  type: Types.HTTP_PUT_SERVERS,
  payload: rowChanges,
});

export const deleteServers = (selection: Array<number>) => ({
  type: Types.HTTP_DELETE_SERVERS,
  payload: selection,
});

export const postServers = inputValues => ({
  type: Types.HTTP_POST_SERVERS,
  payload: inputValues,
});
