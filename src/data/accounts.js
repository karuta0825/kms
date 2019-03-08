import * as Types from '../constants/ActionTypes';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_HTTP_GET:
      if (payload.key === 'accounts') {
        return payload.value;
      }
      return state;
    default:
      return state;
  }
};
