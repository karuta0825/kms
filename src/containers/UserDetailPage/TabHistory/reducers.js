// @flow
import * as Types from '../../../constants/ActionTypes';

const selection = (
  state: Array<number>,
  action: Action
): Array<number> => {
  const { type, payload } = action;
  switch (type) {
    case Types.SELECT_HISTORY: {
      return payload;
    }
    case Types.HTTP_DELETE_HISTORYS:
      return [];
    case Types.SUCCESSED_FETCH_USERINFO:
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
    case Types.TOGGLE_DELETE_MODAL:
      return payload;
    case Types.HTTP_DELETE_HISTORYS:
      return false;
    default:
      return state;
  }
};

const filter = (state: string, action: Action): string => {
  const { type, payload } = action;
  switch (type) {
    case Types.FILTER_HISTORY:
      return payload;
    case Types.HTTP_DELETE_HISTORYS:
      return '';
    default:
      return state;
  }
};

export default (state: UserDetailTabHistoryType, action: Action) => ({
  selection: selection(state.selection, action),
  isOpenDeleteModal: isOpenDeleteModal(
    state.isOpenDeleteModal,
    action
  ),
  filter: filter(state.filter, action),
});
