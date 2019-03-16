// @flow
import * as Types from '../constants/ActionTypes';

export default (
  state: { [key: string]: string },
  action: Action
): { [key: string]: string } => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_HTTP_GET:
      if (payload.key === 'templates') {
        return payload.result;
      }
      return state;
    case Types.FAILED_HTTP_GET:
      return state;
    default:
      return state;
  }
};
