// @flow
import * as Types from '../constants/ActionTypes';

export default (
  state: Array<ServerType>,
  action: Action
): Array<ServerType> => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_HTTP_GET:
      if (payload.key === 'servers') {
        return payload.value;
      }
      return state;
    case Types.SUCCESSED_HTTP_PUT:
      if (payload.key === 'servers') {
        return payload.value;
      }
      return state;
    case Types.FAILED_HTTP_GET:
      return state;
    default:
      return state;
  }
};
