// @flow
import {
  FAILED_FETCH_USERINFO,
  SUCCESSED_FETCH_USERINFO,
} from '../constants/ActionTypes';

export default (state: KidType, action: Action): KidType => {
  const { type, payload } = action;
  switch (type) {
    case SUCCESSED_FETCH_USERINFO: {
      const [baseInfo] = payload.baseInfo;
      return baseInfo;
    }
    case FAILED_FETCH_USERINFO:
      return state;
    default:
      return state;
  }
};
