import * as Types from '../constants/ActionTypes';

export default (
  state: Array<HistoryType>,
  action: Action
): Array<History> => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_FETCH_USERINFO:
      return payload.history;
    case Types.FAILED_FETCH_USERINFO:
      return state;
    default:
      return state;
  }
};
