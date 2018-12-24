// @flow
import {
  TOGGLE_EDIT_MODE,
  SUCCESSED_FETCH_USERINFO,
  CHANGE_BASEINFO_VALUE,
} from '../../../constants/ActionTypes';

const isEdit = (
  state: boolean,
  action,
  tabName: string
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_EDIT_MODE:
      if (payload.tabName === tabName) {
        return payload.isEdit;
      }
      return state;
    default:
      return state;
  }
};

const inputValues = (
  state: Object,
  action: Action,
  cache: KidType
): Object => {
  const { type, payload } = action;
  switch (type) {
    case SUCCESSED_FETCH_USERINFO:
      return payload.baseInfo[0];
    case TOGGLE_EDIT_MODE:
      if (payload.tabName === 'BASEINFO' && !payload.isEdit) {
        return cache;
      }
      return state;
    case CHANGE_BASEINFO_VALUE: {
      const obj = {};
      obj[payload.key] = payload.value;
      return {
        ...state,
        ...obj,
      };
    }
    default:
      return state;
  }
};

export default (
  state: UserDetailTabBaseInfoType,
  action: Action,
  data: CombineDataType
) => ({
  isEdit: isEdit(state.isEdit, action, 'BASEINFO'),
  inputValues: inputValues(
    state.inputValues,
    action,
    data.baseInfo
  ),
});
