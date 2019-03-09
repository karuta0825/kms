import * as Types from '../../constants/ActionTypes';

export const changePage = (idx: number) => ({
  type: Types.CHANGE_USER_LIST_PAGE,
  payload: idx,
});

export const selectUser = (idx: number) => ({
  type: Types.SELECT_USER,
  payload: idx,
});

export const toggleFilter = () => ({
  type: Types.TOGGLE_FILTER_MENU,
});

export const searchKeyword = (keyword: string) => ({
  type: Types.SEARCH_KID_BY_KEYWORD,
  payload: keyword,
});

export const filterVersion = (version: string) => ({
  type: Types.FILTER_VERSION,
  payload: version,
});

export const filterNetwork = (type: string) => ({
  type: Types.FILTER_NETWORK,
  payload: type,
});

export const filterMobile = () => ({
  type: Types.FILTER_MOBILE,
  payload: null,
});

export const filterSystemType = (type: string) => ({
  type: Types.FILTER_SYSTEM_TYPE,
  payload: type,
});

export const changeColumnFilters = (
  filters: Array<{ [key: string]: string }>
) => ({
  type: Types.FILTER_USER_LIST_BY_COLUMN,
  payload: filters,
});

export const deleteKids = (selection: Array<number>) => ({
  type: Types.HTTP_DELETE_KIDS,
  payload: selection,
});
