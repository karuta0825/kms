// @flow
import * as Types from '../constants/ActionTypes';

export default (
  state: Array<KidType>,
  action: Action
): Array<KidType> => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_HTTP_GET:
      if (payload.key === 'kids') {
        return payload.value;
      }
      return state;
    case Types.FAILED_HTTP_GET:
      return state;
    default:
      return state;
  }
};
