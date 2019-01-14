import {
  SUCCESSED_FETCH_USERINFO,
  FAILED_FETCH_USERINFO,
} from '../constants/ActionTypes';

export default (
  state: Array<BusivType>,
  action: Action
): Array<BusivType> => {
  const { type, payload } = action;
  switch (type) {
    case SUCCESSED_FETCH_USERINFO:
      return payload.busiv;
    case FAILED_FETCH_USERINFO:
      return state;
    default:
      return state;
  }
};
