// @flow
import {
  TOGGLE_EDIT_MODE,
  SUCCESSED_FETCH_USERINFO,
  FAILED_FETCH_USERINFO,
  SELECT_CLIENT,
  CHANGE_CLIENT_INFO,
  FETCH_USERINFO,
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
  state: Array<ClientType>,
  action: Action,
  data: Array<ClientType>
): Array<ClientType> => {
  const { type, payload } = action;
  switch (type) {
    case SUCCESSED_FETCH_USERINFO:
      return payload.client;
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
    case SELECT_CLIENT: {
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
      if (payload.tabName === 'CLIENT') {
        return {};
      }
      return state;
    case CHANGE_CLIENT_INFO:
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
  inputValues: inputValues(
    state.inputValues,
    action,
    data.clients
  ),
  selection: selection(state.selection, action),
  rowChanges: rowChanges(state.rowChanges, action),
});
