import {
  SUCCESSED_FETCH_USERINFO,
  FAILED_FETCH_USERINFO,
} from '../constants/ActionTypes';

export default (
  state: Array<HistoryType>,
  action: Action
): Array<History> => {
  const { type, payload } = action;
  switch (type) {
    case SUCCESSED_FETCH_USERINFO:
      return payload.history;
    case FAILED_FETCH_USERINFO:
      return state;
    default:
      return state;
  }
};
