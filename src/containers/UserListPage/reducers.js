// @flow
import {
  TOGGLE_FILTER_MENU,
  SEARCH_KID_BY_KEYWORD,
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
    default:
      return state;
  }
};

export default (state = userListPage, action: Action) => ({
  isFilterOpen: isFilterOpen(state.isFilterOpen, action),
  filter: setFilter(state.filter, action),
});
