import {
  CHANGE_FENICS_INFO,
  SELECT_FENICS,
  TOGGLE_FENICS_DOWNLOAD_MODAL,
  TOGGLE_DOWNLOAD_ITEM,
  EXEC_FENICS_DOWNLOAD,
} from '../../../constants/ActionTypes';

export const selectFenics = num => ({
  type: SELECT_FENICS,
  payload: num,
});

export const updateRows = changeRowsInfo => ({
  type: CHANGE_FENICS_INFO,
  payload: changeRowsInfo,
});

export const toggleDownloadModal = isOpen => ({
  type: TOGGLE_FENICS_DOWNLOAD_MODAL,
  payload: isOpen,
});

export const toggleDownloadItem = (
  isChecked: boolean,
  itemName: string
) => ({
  type: TOGGLE_DOWNLOAD_ITEM,
  payload: { isChecked, itemName },
});

export const execDownload = isExec => ({
  type: EXEC_FENICS_DOWNLOAD,
  payload: isExec,
});
