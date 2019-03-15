import * as Types from '../constants/ActionTypes';

export default (state: MobileType, action: Action): MobileType => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_FETCH_USERINFO:
      return payload.mobile;
    case Types.FAILED_FETCH_USERINFO:
      return state;
    default:
      return state;
  }
};
