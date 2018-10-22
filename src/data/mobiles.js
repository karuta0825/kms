import {
  FETCH_USERINFO,
} from '../constants/ActionTypes';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USERINFO:
      return payload.mobile;
    default:
      return state;
  }
}