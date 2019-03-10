// @flow
import * as Types from '../../constants/ActionTypes';

const selection = (
  state: Array<number>,
  action: Action
): Array<number> => {
  const { type, payload } = action;
  switch (type) {
    case Types.SELECT_SERVERS:
      return payload;
    case Types.TOGGLE_SERVER_EDIT_MODE:
      return [];
    case Types.HTTP_DELETE_SERVERS:
      return [];
    default:
      return state;
  }
};

const isEdit = (state: boolean, action: Action): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.TOGGLE_SERVER_EDIT_MODE:
      return payload;
    case Types.SUCCESSED_HTTP_PUT:
      if (payload.key === 'servers') {
        return false;
      }
      return state;
    default:
      return state;
  }
};

const selectedProject = (state: string, action: Action): string => {
  const { type, payload } = action;
  switch (type) {
    case Types.SELECT_PROJECT:
      return payload;
    case Types.SUCCESSED_HTTP_GET:
      if (payload.key === 'servers') {
        return payload.value.length < 1
          ? ''
          : payload.value
              .map(server => server.project)
              .filter(
                (value, idx, list) => list.indexOf(value) === idx
              )[0];
      }
      return state;
    default:
      return state;
  }
};

const isOpenDeleteModal = (
  state: boolean,
  action: Action
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.TOGGLE_MODAL:
      if (payload.name === 'servers') {
        return payload.isOpen;
      }
      return state;
    case Types.HTTP_DELETE_SERVERS:
      return false;
    default:
      return state;
  }
};

const inputValues = (state, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

const rowChanges = (state, action: Action): Object => {
  const { type, payload } = action;
  switch (type) {
    case Types.TOGGLE_SERVER_EDIT_MODE:
      return {};
    case Types.CHANGE_SERVER_VALUE:
      return payload;
    default:
      return state;
  }
};

export default (state: ServerManagePageType, action: Action) => ({
  selection: selection(state.selection, action),
  isEdit: isEdit(state.isEdit, action),
  selectedProject: selectedProject(state.selectedProject, action),
  isOpenDeleteModal: isOpenDeleteModal(
    state.isOpenDeleteModal,
    action
  ),
  rowChanges: rowChanges(state.rowChanges, action),
  inputValues: inputValues(state.inputValues, action),
});
