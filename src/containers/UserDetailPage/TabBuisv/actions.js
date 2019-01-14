import {
  SELECT_BUSIV_BASE_INDEX,
  CHANGE_BUSIV_VALUE,
} from '../../../constants/ActionTypes';

export const selectBase = (index: number) => ({
  type: SELECT_BUSIV_BASE_INDEX,
  payload: index,
});

export const changeValue = (
  key: string,
  value: any
): Action => ({
  type: CHANGE_BUSIV_VALUE,
  payload: {
    key,
    value,
  },
});
