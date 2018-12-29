// @flow
import {
  TOGGLE_EDIT_MODE,
  SUCCESSED_FETCH_USERINFO,
  CHANGE_BASEINFO_VALUE,
  ADD_BASEINFO_VALUE,
} from '../../../constants/ActionTypes';
import checkers from '../../../utils/inputChecks';

const inputCheck = {
  userkey: checkers.upperAlpha,
  db_password: checkers.upperAlphaNum,
  fenics_key: checkers.lowerAlphaNum,
};

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
    case ADD_BASEINFO_VALUE: {
      const obj = {};
      obj[payload.key] =
        Number(state[payload.key]) + payload.num;
      return {
        ...state,
        ...obj,
      };
    }
    default:
      return state;
  }
};

const isInputError = (state, action: Action): Object => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_BASEINFO_VALUE: {
      const obj = {};

      if (!inputCheck[payload.key]) {
        return state;
      }

      obj[payload.key] = inputCheck[payload.key](payload.value);
      return {
        ...state,
        ...obj,
      };
    }
    case TOGGLE_EDIT_MODE: {
      if (payload.tabName === 'BASEINFO' && !payload.isEdit) {
        const obj = {};
        Object.keys(state).forEach(key => {
          obj[key] = false;
        });
        return obj;
      }
      return state;
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
  isInputError: isInputError(state.isInputError, action),
});
