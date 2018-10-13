// @flow
import type { ServerType } from '../types';
import {
  SUCCESSED_FETCH_SERVERS,
  FAILED_FETCH_SERVERS,
} from '../constants/ActionTypes';

export default (state: Array<ServerType>, action) => {
  const { type, payload } = action;
  switch (type) {
    case SUCCESSED_FETCH_SERVERS:
      return payload;
    case FAILED_FETCH_SERVERS:
      return state;
    default:
      return state;
  }
}