import * as Types from '../constants/ActionTypes';

export default (
  state: Array<MemoType>,
  action: Action
): Array<MemoType> => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_FETCH_USERINFO:
      return payload.memo;
    case Types.FAILED_FETCH_USERINFO:
      return state;
    default:
      return state;
  }
};
