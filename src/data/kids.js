// @flow
import {
  SUCCESSED_FETCH_KIDS,
  FAILED_FETCH_KIDS,
} from '../constants/ActionTypes';

export default (state: Array<KidType>, action: Action): Array<KidType> => {
  const { type, payload } = action;
  switch (type) {
    case SUCCESSED_FETCH_KIDS:
      return payload;
    case FAILED_FETCH_KIDS:
      return state;
    default:
      return state;
  }
};
