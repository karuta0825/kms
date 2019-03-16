import * as Types from '../../../constants/ActionTypes';

export const toggleEditMode = (isEdit: boolean, tabName: string) => ({
  type: Types.TOGGLE_EDIT_MODE,
  payload: { isEdit, tabName },
});

export const selectClient = num => ({
  type: Types.SELECT_CLIENT,
  payload: num,
});

export const updateRows = changeRowsInfo => ({
  type: Types.CHANGE_CLIENT_INFO,
  payload: changeRowsInfo,
});

export const toggleDownloadModal = isOpen => ({
  type: Types.TOGGLE_CLIENT_DOWNLOAD_MODAL,
  payload: isOpen,
});

export const toggleDownloadItem = (
  isChecked: boolean,
  itemName: string
) => ({
  type: Types.TOGGLE_CLIENT_DOWNLOAD_ITEM,
  payload: { isChecked, itemName },
});

export const execDownload = isExec => ({
  type: Types.EXEC_CLIENT_DOWNLOAD,
  payload: isExec,
});

export const putClient = (kids_id: number, rowChanges) => ({
  type: Types.HTTP_PUT_CLIENTS,
  payload: { kids_id, rowChanges },
});

export const deleteClient = (
  kids_id: number,
  selection: Array<string>
) => ({
  type: Types.HTTP_DELETE_CLIENTS,
  payload: { kids_id, selection },
});
