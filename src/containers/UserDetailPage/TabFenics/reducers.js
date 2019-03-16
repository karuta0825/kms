// @flow
import * as Types from '../../../constants/ActionTypes';

const isEdit = (state: boolean, action, tabName: string): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.TOGGLE_EDIT_MODE:
      if (payload.tabName === tabName) {
        return payload.isEdit;
      }
      return state;
    case Types.HTTP_PUT_FENICSES:
      return false;
    case Types.FETCH_USERINFO:
      return false;
    default:
      return state;
  }
};

const isOpenDeleteModal = (
  state: boolean,
  action: Action
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.TOGGLE_DELETE_MODAL:
      if (payload.name === 'fenics') {
        return payload.isOpen;
      }
      return state;
    case Types.HTTP_DELETE_FENICSES:
      return false;
    default:
      return state;
  }
};

const inputValues = (
  state: Array<FenicsType>,
  action: Action,
  data: Array<FenicsType>
): Array<FenicsType> => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_FETCH_USERINFO:
      return payload.fenics.filter(item => item.is_mobile === 0);
    case Types.FAILED_FETCH_USERINFO:
      return [];
    case Types.TOGGLE_EDIT_MODE:
      if (!payload) {
        return data;
      }
      return state;
    default:
      return state;
  }
};

const selection = (
  state: Array<number>,
  action: Action
): Array<number> => {
  const { type, payload } = action;
  switch (type) {
    case Types.SELECT_FENICS: {
      return payload;
    }
    case Types.SUCCESSED_FETCH_USERINFO:
      return [];
    default:
      return state;
  }
};

const rowChanges = (state, action: Action): Object => {
  const { type, payload } = action;
  switch (type) {
    case Types.FETCH_USERINFO:
      return {};
    case Types.TOGGLE_EDIT_MODE:
      if (payload.tabName === 'FENICS') {
        return {};
      }
      return state;
    case Types.CHANGE_FENICS_INFO:
      return payload;
    default:
      return state;
  }
};

const isOpenDownloadModal = (
  state: boolean,
  action: Action
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.TOGGLE_FENICS_DOWNLOAD_MODAL:
      return payload;
    case Types.EXEC_FENICS_DOWNLOAD:
      return false;
    default:
      return state;
  }
};

const canDownload = (state: boolean, action: Action): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.EXEC_FENICS_DOWNLOAD:
      return payload;
    case Types.TOGGLE_FENICS_DOWNLOAD_MODAL:
      if (payload) {
        return false;
      }
      return state;
    default:
      return state;
  }
};

const selectDownloadItem = (
  state: Object,
  action: Action
): Object => {
  const { type, payload } = action;
  switch (type) {
    case Types.TOGGLE_DOWNLOAD_ITEM: {
      const obj = {};
      obj[payload.itemName] = payload.isChecked;
      return {
        ...state,
        ...obj,
      };
    }
    default:
      return state;
  }
};

export default (
  state: UserDetailTabFenicsType,
  action: Action,
  data: CombineDataType
) => ({
  isEdit: isEdit(state.isEdit, action, 'FENICS'),
  isOpenDeleteModal: isOpenDeleteModal(
    state.isOpenDeleteModal,
    action
  ),
  inputValues: inputValues(state.inputValues, action, data.fenics),
  selection: selection(state.selection, action),
  rowChanges: rowChanges(state.rowChanges, action),
  isOpenDownloadModal: isOpenDownloadModal(
    state.isOpenDownloadModal,
    action
  ),
  canDownload: canDownload(state.canDownload, action),
  download: selectDownloadItem(state.download, action),
});
