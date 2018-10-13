// @flow
import type { EnvironemntType } from '../types';
import {
  SUCCESSED_FETCH_ENVIRONMENTS,
  FAILED_FETCH_ENVIRONMENTS,
} from '../constants/ActionTypes';

export default (state: Array<EnvironemntType>, action) => {
  const { type, payload } = action;
  switch (type) {
    case SUCCESSED_FETCH_ENVIRONMENTS:
      return payload;
    case FAILED_FETCH_ENVIRONMENTS:
      return state;
    default:
      return state;
  }
}