import {
  SELECT_SERVICE_VERSION,
  EDIT_SERVICE,
  DELETING_SERVICE,
} from '../../constants/ActionTypes';

export const selectVersion = (version: string) => ({
  type: SELECT_SERVICE_VERSION,
  payload: version,
});

export const changeEditingRowIds = (ids: Array<number>) => ({
  type: EDIT_SERVICE,
  payload: ids,
});

export const changeDeletingRowIds = (ids: Array<number>) => ({
  type: DELETING_SERVICE,
  payload: ids,
});
