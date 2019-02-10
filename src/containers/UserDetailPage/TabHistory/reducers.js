// @flow
import {
  SUCCESSED_FETCH_USERINFO,
  SELECT_HISTORY,
  TOGGLE_DELETE_MODAL,
  FILTER_HISTORY,
} from '../../../constants/ActionTypes';

const selection = (
  state: Array<number>,
  action: Action
): Array<number> => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_HISTORY: {
      return payload;
    }
    case SUCCESSED_FETCH_USERINFO:
      return [];
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
    case TOGGLE_DELETE_MODAL:
      return payload;
    default:
      return state;
  }
};

const filter = (state: string, action: Action): string => {
  const { type, payload } = action;
  switch (type) {
    case FILTER_HISTORY:
      return payload;
    default:
      return state;
  }
};

export default (
  state: UserDetailTabHistoryType,
  action: Action
) => ({
  selection: selection(state.selection, action),
  isOpenDeleteModal: isOpenDeleteModal(
    state.isOpenDeleteModal,
    action
  ),
  filter: filter(state.filter, action),
});
