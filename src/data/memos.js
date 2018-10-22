import {
  SUCCESSED_FETCH_USERINFO,
  FAILED_FETCH_USERINFO,
} from '../constants/ActionTypes';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SUCCESSED_FETCH_USERINFO:
      return payload.memo;
    case FAILED_FETCH_USERINFO:
      return state;
    default:
      return state;
  }
};
