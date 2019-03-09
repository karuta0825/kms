import * as Types from '../../../constants/ActionTypes';

export const selectFenics = num => ({
  type: Types.SELECT_FENICS,
  payload: num,
});

export const updateRows = changeRowsInfo => ({
  type: Types.CHANGE_FENICS_INFO,
  payload: changeRowsInfo,
});

export const toggleDownloadModal = isOpen => ({
  type: Types.TOGGLE_FENICS_DOWNLOAD_MODAL,
  payload: isOpen,
});

export const toggleDownloadItem = (
  isChecked: boolean,
  itemName: string
) => ({
  type: Types.TOGGLE_DOWNLOAD_ITEM,
  payload: { isChecked, itemName },
});

export const execDownload = isExec => ({
  type: Types.EXEC_FENICS_DOWNLOAD,
  payload: isExec,
});

export const putFenics = (kids_id: number, rowChanges) => ({
  type: Types.HTTP_PUT_FENICSES,
  payload: { kids_id, rowChanges },
});

export const deleteFenics = (
  kids_id: number,
  selection: Array<string>
) => ({
  type: Types.HTTP_DELETE_FENICSES,
  payload: { kids_id, selection },
});
