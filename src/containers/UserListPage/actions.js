import {
  TOGGLE_FILTER_MENU,
  SEARCH_KID_BY_KEYWORD,
  FILTER_VERSION,
  FILTER_NETWORK,
  FILTER_MOBILE,
  FILTER_SYSTEM_TYPE,
  SELECT_USER,
  CHANGE_USER_LIST_PAGE,
  FILTER_USER_LIST_BY_COLUMN,
} from '../../constants/ActionTypes';

export const changePage = (idx: number) => ({
  type: CHANGE_USER_LIST_PAGE,
  payload: idx,
});

export const selectUser = (idx: number) => ({
  type: SELECT_USER,
  payload: idx,
});

export const toggleFilter = () => ({
  type: TOGGLE_FILTER_MENU,
});

export const searchKeyword = (keyword: string) => ({
  type: SEARCH_KID_BY_KEYWORD,
  payload: keyword,
});

export const filterVersion = (version: string) => ({
  type: FILTER_VERSION,
  payload: version,
});

export const filterNetwork = (type: string) => ({
  type: FILTER_NETWORK,
  payload: type,
});

export const filterMobile = () => ({
  type: FILTER_MOBILE,
  payload: null,
});

export const filterSystemType = (type: string) => ({
  type: FILTER_SYSTEM_TYPE,
  payload: type,
});

export const changeColumnFilters = (
  filters: Array<{ [key: string]: string }>
) => ({
  type: FILTER_USER_LIST_BY_COLUMN,
  payload: filters,
});
