import * as Types from '../../../constants/ActionTypes';

const inputValues = (
  state: Object,
  action: Action,
  data: LicenseType
): Object => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_FETCH_USERINFO: {
      return payload.license[0];
    }
    default:
      return state;
  }
};

const isEdit = (state: boolean, action, tabName: string): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.TOGGLE_EDIT_MODE:
      if (payload.tabName === tabName) {
        return payload.isEdit;
      }
      return state;
    case Types.HTTP_PUT_LICENSES:
      return false;
    default:
      return state;
  }
};

const selection = (
  state,
  action: Action,
  inputData: Object
): Array<number> => {
  const { type, payload } = action;
  switch (type) {
    case Types.SELECT_LICENSE: {
      return payload;
    }
    case Types.TOGGLE_EDIT_MODE: {
      if (payload) {
        return Object.keys(inputData).filter(
          key => inputData[key] === 1
        );
      }
      return state;
    }
    case Types.HTTP_PUT_LICENSES:
      return [];
    default:
      return state;
  }
};

export default (
  state: UserDetailTabLicenseType,
  action: Action,
  data: CombineDataType
): UserDetailTabLicenseType => ({
  isEdit: isEdit(state.isEdit, action, 'LICENSE'),
  inputValues: inputValues(state.inputValues, action, data.license),
  selection: selection(state.selection, action, state.inputValues),
});
