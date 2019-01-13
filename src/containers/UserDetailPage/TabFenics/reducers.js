// @flow
import {
  TOGGLE_EDIT_MODE,
  SUCCESSED_FETCH_USERINFO,
  FAILED_FETCH_USERINFO,
  FETCH_USERINFO,
  SELECT_FENICS,
  CHANGE_FENICS_INFO,
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
      return payload.fenics;
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
});
