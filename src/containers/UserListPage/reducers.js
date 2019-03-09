// @flow
import * as Types from '../../constants/ActionTypes';

const isOpenDeleteModal = (
  state: boolean,
  action: Action
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.TOGGLE_DELETE_MODAL:
      if (payload.name === 'kids') {
        return payload.isOpen;
      }
      return state;
    case Types.HTTP_DELETE_KIDS:
      return false;
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
    case Types.SELECT_USER:
      return payload;
    case Types.HTTP_DELETE_KIDS:
      return [];
    default:
      return state;
  }
};

const columnFilters = (
  state: Array<[{ columnName: string, value: string }]>,
  action: Action
): Array<[{ columnName: string, value: string }]> => {
  const { type, payload } = action;
  switch (type) {
    case Types.FILTER_USER_LIST_BY_COLUMN: {
      return payload;
    }
    default:
      return state;
  }
};

const isFilterOpen = (state: boolean, action: Action): boolean => {
  const { type } = action;

  switch (type) {
    case Types.TOGGLE_FILTER_MENU:
      return !state;
    case Types.SUCCESSED_FETCH_USERINFO:
      return false;
    default:
      return state;
  }
};

const setFilter = (state: Object, action: Action): Object => {
  const { type, payload } = action;
  switch (type) {
    case Types.SEARCH_KID_BY_KEYWORD:
      return {
        ...state,
        keyword: payload,
      };
    case Types.FILTER_SYSTEM_TYPE:
      if (payload === 'cloud') {
        return {
          ...state,
          isCloud: !state.isCloud,
        };
      }

      if (payload === 'onpre') {
        return {
          ...state,
          isOnpre: !state.isOnpre,
        };
      }

      if (payload === 'kensyo') {
        return {
          ...state,
          isKensyo: !state.isKensyo,
        };
      }

      return {
        ...state,
        isDemo: !state.isDemo,
      };
    case Types.FILTER_VERSION:
      if (payload === 'ES') {
        return {
          ...state,
          isES: !state.isES,
        };
      }
      return {
        ...state,
        isLM: !state.isLM,
      };
    case Types.FILTER_NETWORK:
      if (payload === 'fenics') {
        return {
          ...state,
          hasFenics: !state.hasFenics,
        };
      }
      return {
        ...state,
        hasBusiv: !state.hasBusiv,
      };
    case Types.FILTER_MOBILE:
      return {
        ...state,
        hasMobile: !state.hasMobile,
      };
    default:
      return state;
  }
};

export default (state: UserListPageType, action: Action) => ({
  selection: selection(state.selection, action),
  columnFilters: columnFilters(state.columnFilters, action),
  isFilterOpen: isFilterOpen(state.isFilterOpen, action),
  filter: setFilter(state.filter, action),
  isOpenDeleteModal: isOpenDeleteModal(
    state.isOpenDeleteModal,
    action
  ),
});
