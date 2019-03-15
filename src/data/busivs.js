import * as Types from '../constants/ActionTypes';

export default (
  state: Array<BusivType>,
  action: Action
): Array<BusivType> => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_FETCH_USERINFO:
      return payload.busiv;
    case Types.FAILED_FETCH_USERINFO:
      return state;
    default:
      return state;
  }
};
