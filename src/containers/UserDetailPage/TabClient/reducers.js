// @flow
import {
  TOGGLE_EDIT_MODE,
  SUCCESSED_FETCH_USERINFO,
  FAILED_FETCH_USERINFO,
  SELECT_CLIENT,
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
});
