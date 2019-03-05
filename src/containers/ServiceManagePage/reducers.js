import * as Types from '../../constants/ActionTypes';

const isEdit = (state: boolean, action: Action): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.TOGGLE_SERVICE_EDIT_MODE:
      return payload;
    case Types.SUCCESSED_HTTP_PUT:
      if (payload.key === 'services') {
        return false;
      }
      return state;
    default:
      return state;
  }
};

const selection = (
  state: Array<number>,
  action: Action
): Array<number> => {
  const { type, payload } = action;
  switch (type) {
    case Types.SELECT_SERVICE:
      return payload;
    case Types.TOGGLE_SERVICE_EDIT_MODE:
      return [];
    default:
      return state;
  }
};

const rowChanges = (state, action: Action): Object => {
  const { type, payload } = action;
  switch (type) {
    case Types.TOGGLE_SERVICE_EDIT_MODE:
      return {};
    case Types.CHANGE_SERVICE_VALUE:
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
    case Types.SELECT_SERVICE_VERSION:
      return payload;
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
      if (payload.name === 'service') {
        return payload.isOpen;
      }
      return state;
    case Types.SUCCESSED_HTTP_DELETE:
      if (payload.key === 'services') {
        return false;
      }
      return state;
    default:
      return state;
  }
};

const isOpenNewModal = (
  state: boolean,
  action: Action
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.TOGGLE_MODAL:
      if (payload.name === 'create-service') {
        return payload.isOpen;
      }
      return state;
    default:
      return state;
  }
};

const inputValues = (state: Object, action: Action): Object => {
  const { type, payload } = action;
  switch (type) {
    case Types.INPUT_SERVICE:
      return {
        ...state,
        ...payload,
      };
    case Types.TOGGLE_MODAL:
      if (payload.name === 'create-service') {
        return payload.isOpen
          ? state
          : {
              service_id: '',
              service_name: '',
              sales_id: '',
            };
      }
      return state;
    default:
      return state;
  }
};

export default (
  state: ServiceManagePageType,
  action: Action
) => ({
  isEdit: isEdit(state.isEdit, action),
  selection: selection(state.selection, action),
  rowChanges: rowChanges(state.rowChanges, action),
  inputValues: inputValues(state.inputValues, action),
  selectedVersion: selectedVersion(
    state.selectedVersion,
    action
  ),
  isOpenDeleteModal: isOpenDeleteModal(
    state.isOpenDeleteModal,
    action
  ),
  isOpenNewModal: isOpenNewModal(state.isOpenNewModal, action),
});
