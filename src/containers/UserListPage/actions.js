import {
  TOGGLE_FILTER_MENU,
  SEARCH_KID_BY_KEYWORD,
} from '../../constants/ActionTypes';

export const toggleFilter = isOpen => ({
  type: TOGGLE_FILTER_MENU,
  payload: isOpen,
});

export const searchKeyword = (keyword: string) => ({
  type: SEARCH_KID_BY_KEYWORD,
  payload: keyword,
});
