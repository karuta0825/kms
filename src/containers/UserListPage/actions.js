import {
  TOGGLE_FILTER_MENU,
  SEARCH_KID_BY_KEYWORD,
  FILTER_VERSION,
  FILTER_NETWORK,
  FILTER_MOBILE,
  FILTER_SYSTEM_TYPE,
} from '../../constants/ActionTypes';

export const toggleFilter = isOpen => ({
  type: TOGGLE_FILTER_MENU,
  payload: isOpen,
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
