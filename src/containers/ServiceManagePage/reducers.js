import {
  SELECT_SERVICE_VERSION,
  EDIT_SERVICE,
  DELETING_SERVICE,
} from '../../constants/ActionTypes';

const editingRowIds = (
  state: Array<number>,
  action: Action
): Array<number> => {
  const { type, payload } = action;
  switch (type) {
    case EDIT_SERVICE:
      return payload;
    default:
      return state;
  }
};

const deletingRowIds = (
  state: Array<number>,
  action: Action
): Array<number> => {
  const { type, payload } = action;
  switch (type) {
    case DELETING_SERVICE:
      return payload;
    default:
      return state;
  }
};

const selectedVersion = (
  state: string,
  action: Action
): string => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_SERVICE_VERSION:
      return payload;
    default:
      return state;
  }
};

export default (
  state: ServiceManagePageType,
  action: Action
) => ({
  editingRowIds: editingRowIds(state.editingRowIds, action),
  deletingRowIds: deletingRowIds(state.deletingRowIds, action),
  selectedVersion: selectedVersion(
    state.selectedVersion,
    action
  ),
});
