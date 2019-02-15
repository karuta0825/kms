import { SELECT_SERVICE_VERSION } from '../../constants/ActionTypes';

export const selectVersion = (idx: number) => ({
  type: SELECT_SERVICE_VERSION,
  payload: idx,
});
