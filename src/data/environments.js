// @flow
import * as Types from '../constants/ActionTypes';

export default (
  state: Array<EnvironmentType>,
  action: Action
): Array<EnvironmentType> => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_HTTP_GET:
      if (payload.key === 'environments') {
        return payload.value;
      }
      return state;
    case Types.FAILED_HTTP_GET:
      return state;
    default:
      return state;
  }
};
