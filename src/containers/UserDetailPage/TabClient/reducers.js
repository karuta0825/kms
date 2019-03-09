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
    case Types.HTTP_PUT_CLIENTS:
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
      if (payload.name === 'clients') {
        return payload.isOpen;
      }
      return state;
    case Types.HTTP_DELETE_CLIENTS:
      return false;
    default:
      return state;
  }
};

const inputValues = (
  state: Array<ClientType>,
  action: Action,
  data: Array<ClientType>
): Array<ClientType> => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_FETCH_USERINFO:
      return payload.client;
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
    case Types.SELECT_CLIENT: {
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
      if (payload.tabName === 'CLIENT') {
        return {};
      }
      return state;
    case Types.CHANGE_CLIENT_INFO:
      return payload;
    default:
      return state;
  }
};

export default (
  state: UserDetailTabClientType,
  action: Action,
  data: CombineDataType
) => ({
  isEdit: isEdit(state.isEdit, action, 'CLIENT'),
  inputValues: inputValues(state.inputValues, action, data.clients),
  isOpenDeleteModal: isOpenDeleteModal(
    state.isOpenDeleteModal,
    action
  ),
  selection: selection(state.selection, action),
  rowChanges: rowChanges(state.rowChanges, action),
});
