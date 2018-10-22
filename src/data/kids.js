import {
  SUCCESSED_FETCH_KIDS,
  FAILED_FETCH_KIDS,
  SUCCESSED_FETCH_USERINFO,
  FAILED_FETCH_USERINFO,
} from '../constants/ActionTypes';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SUCCESSED_FETCH_USERINFO:
      return payload.kid;
    case FAILED_FETCH_USERINFO:
      return state;
    case SUCCESSED_FETCH_KIDS:
      return payload;
    case FAILED_FETCH_KIDS:
      return state;
    default:
      return state;
  }
};
