import { SELECT_BUSIV_BASE_INDEX } from '../../../constants/ActionTypes';

export const selectBase = (index: number) => ({
  type: SELECT_BUSIV_BASE_INDEX,
  payload: index,
});
