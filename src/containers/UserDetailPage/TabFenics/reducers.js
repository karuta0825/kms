// @flow
import {
  TOGGLE_EDIT_MODE,
  SUCCESSED_FETCH_USERINFO,
  FAILED_FETCH_USERINFO,
  FETCH_USERINFO,
  SELECT_FENICS,
  CHANGE_FENICS_INFO,
  TOGGLE_FENICS_DOWNLOAD_MODAL,
  TOGGLE_DOWNLOAD_ITEM,
  EXEC_FENICS_DOWNLOAD,
} from '../../../constants/ActionTypes';

const isEdit = (
  state: boolean,
  action,
  tabName: string
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_EDIT_MODE:
      if (payload.tabName === tabName) {
        return payload.isEdit;
      }
      return state;
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
    case SUCCESSED_FETCH_USERINFO:
      return payload.fenics.filter(item => item.is_mobile === 0);
    case FAILED_FETCH_USERINFO:
      return [];
    case TOGGLE_EDIT_MODE:
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
    case SELECT_FENICS: {
      return payload;
    }
    case SUCCESSED_FETCH_USERINFO:
      return [];
    default:
      return state;
  }
};

const rowChanges = (state, action: Action): Object => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USERINFO:
      return {};
    case TOGGLE_EDIT_MODE:
      if (payload.tabName === 'FENICS') {
        return {};
      }
      return state;
    case CHANGE_FENICS_INFO:
      return payload;
    default:
      return state;
  }
};

const isDownloadOpen = (
  state: boolean,
  action: Action
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_FENICS_DOWNLOAD_MODAL:
      return payload;
    case EXEC_FENICS_DOWNLOAD:
      return false;
    default:
      return state;
  }
};

const canDownload = (
  state: boolean,
  action: Action
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case EXEC_FENICS_DOWNLOAD:
      return payload;
    case TOGGLE_FENICS_DOWNLOAD_MODAL:
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
    case TOGGLE_DOWNLOAD_ITEM: {
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
  inputValues: inputValues(
    state.inputValues,
    action,
    data.fenics
  ),
  selection: selection(state.selection, action),
  rowChanges: rowChanges(state.rowChanges, action),
  isDownloadOpen: isDownloadOpen(state.isDownloadOpen, action),
  canDownload: canDownload(state.canDownload, action),
  download: selectDownloadItem(state.download, action),
});
