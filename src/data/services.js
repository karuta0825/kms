import {
  SUCCESSED_FETCH_SERVICES,
  FAILED_FETCH_SERVICES,
} from '../constants/ActionTypes';

export default (
  state: Array<ServiceType>,
  action: Action
): Array<ServiceType> => {
  const { type, payload } = action;
  switch (type) {
    case SUCCESSED_FETCH_SERVICES:
      return payload;
    case FAILED_FETCH_SERVICES:
      return state;
    default:
      return state;
  }
};
