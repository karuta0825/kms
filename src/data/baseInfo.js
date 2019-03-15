// @flow
import * as Types from '../constants/ActionTypes';

export default (state: KidType, action: Action): KidType => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_FETCH_USERINFO: {
      const [baseInfo] = payload.baseInfo;
      return baseInfo;
    }
    case Types.FAILED_FETCH_USERINFO:
      return state;
    default:
      return state;
  }
};
