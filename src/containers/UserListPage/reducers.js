// @flow
import {
  TOGGLE_FILTER_MENU,
  SEARCH_KID_BY_KEYWORD,
  FILTER_VERSION,
  FILTER_NETWORK,
  FILTER_MOBILE,
  FILTER_SYSTEM_TYPE,
} from '../../constants/ActionTypes';
import initState from '../../initState';

type Action = {
  type: string,
  payload: any,
};

const { userListPage } = initState;

const isFilterOpen = (state: boolean, action: Action): boolean => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_FILTER_MENU:
      if (payload === undefined) {
        return !state;
      }
      return payload;
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

export default (state = userListPage, action: Action) => ({
  isFilterOpen: isFilterOpen(state.isFilterOpen, action),
  filter: setFilter(state.filter, action),
});
