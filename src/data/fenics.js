import * as Types from '../constants/ActionTypes';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_FETCH_USERINFO:
      return payload.fenics;
    case Types.FAILED_FETCH_USERINFO:
      return state;
    default:
      return state;
  }
};
