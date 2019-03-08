import * as Types from '../constants/ActionTypes';

export default (
  state: Array<ServiceType>,
  action: Action
): Array<ServiceType> => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_HTTP_GET:
      if (payload.key === 'services') {
        return payload.value;
      }
      return state;
    case Types.FAILED_HTTP_GET:
      return state;
    default:
      return state;
  }
};
