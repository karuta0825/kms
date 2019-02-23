// @flow
import {
  TOGGLE_FILTER_MENU,
  SEARCH_KID_BY_KEYWORD,
  FILTER_VERSION,
  FILTER_NETWORK,
  FILTER_MOBILE,
  FILTER_SYSTEM_TYPE,
  SUCCESSED_FETCH_USERINFO,
  SELECT_USER,
  CHANGE_USER_LIST_PAGE,
  FILTER_USER_LIST_BY_COLUMN,
} from '../../constants/ActionTypes';

const currentPage = (state: number, action: Action): number => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_USER_LIST_PAGE:
      return payload;
    case SEARCH_KID_BY_KEYWORD:
      return 0;
    default:
      return state;
  }
};

const selections = (
  state: Array<number>,
  action: Action
): Array<number> => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_USER:
      return payload;
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
    case FILTER_USER_LIST_BY_COLUMN: {
      return payload;
    }
    default:
      return state;
  }
};

const isFilterOpen = (
  state: boolean,
  action: Action
): boolean => {
  const { type } = action;

  switch (type) {
    case TOGGLE_FILTER_MENU:
      return !state;
    case SUCCESSED_FETCH_USERINFO:
      return false;
    default:
      return state;
  }
};

const setFilter = (state: Object, action: Action): Object => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_KID_BY_KEYWORD:
      return {
        ...state,
        keyword: payload,
      };
    case FILTER_SYSTEM_TYPE:
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
    case FILTER_VERSION:
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
    case FILTER_NETWORK:
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
    case FILTER_MOBILE:
      return {
        ...state,
        hasMobile: !state.hasMobile,
      };
    default:
      return state;
  }
};

export default (state: UserListPageType, action: Action) => ({
  currentPage: currentPage(state.currentPage, action),
  selections: selections(state.selections, action),
  columnFilters: columnFilters(state.columnFilters, action),
  isFilterOpen: isFilterOpen(state.isFilterOpen, action),
  filter: setFilter(state.filter, action),
});
