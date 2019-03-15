import * as Types from '../constants/ActionTypes';

export default (
  state: Array<ClientType>,
  action: Action
): Array<ClientType> => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_FETCH_USERINFO:
      return payload.client;
    case Types.FAILED_FETCH_USERINFO:
      return state;
    default:
      return state;
  }
};
