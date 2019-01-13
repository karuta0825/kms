import {
  CHANGE_FENICS_INFO,
  SELECT_FENICS,
} from '../../../constants/ActionTypes';

export const selectFenics = num => ({
  type: SELECT_FENICS,
  payload: num,
});

export const updateRows = changeRowsInfo => ({
  type: CHANGE_FENICS_INFO,
  payload: changeRowsInfo,
});
