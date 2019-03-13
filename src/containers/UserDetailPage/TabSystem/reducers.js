// @flow
import * as Types from '../../../constants/ActionTypes';
import checkers from '../../../utils/inputChecks';

function getStartNumberId(range_id: string): string {
  const [start_id, end_id] = (range_id && range_id.split('-')) || [
    '',
    '',
  ];
  if (start_id === '') {
    return '0';
  }
  return start_id;
}

function isDecreae(value: string, cache: number): boolean {
  const fmt = Number(value);
  return fmt < cache;
}

const inputCheck = {
  busiv_number: checkers.isPNum,
  userkey: checkers.upperAlpha,
  db_password: checkers.upperAlphaNum,
  fenics_key: checkers.lowerAlphaNum,
  client_number: isDecreae,
  fenics_number: isDecreae,
};

const isEdit = (state: boolean, action, tabName: string): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.TOGGLE_EDIT_MODE:
      if (payload.tabName === tabName) {
        return payload.isEdit;
      }
      return state;
    case Types.HTTP_PUT_KIDS:
      return false;
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
    case Types.SUCCESSED_FETCH_USERINFO:
      const inputValues = payload.baseInfo[0];
      return {
        ...inputValues,
        start_id: getStartNumberId(inputValues.range_id),
      };
    case Types.TOGGLE_EDIT_MODE:
      if (payload.tabName === 'BASEINFO' && !payload.isEdit) {
        return {
          ...cache,
          start_id: getStartNumberId(cache.range_id),
        };
      }
      return state;
    case Types.CHANGE_BASEINFO_VALUE: {
      const obj = {};
      obj[payload.key] = payload.value;
      return {
        ...state,
        ...obj,
      };
    }
    case Types.ADD_BASEINFO_VALUE: {
      const obj = {};
      obj[payload.key] = Number(state[payload.key]) + payload.num;
      return {
        ...state,
        ...obj,
      };
    }
    default:
      return state;
  }
};

const isInputError = (
  state,
  action: Action,
  cache: KidType,
  data: KidType
): Object => {
  const { type, payload } = action;
  switch (type) {
    case Types.CHANGE_BASEINFO_VALUE: {
      const obj = {};

      if (!inputCheck[payload.key]) {
        return state;
      }

      obj[payload.key] = inputCheck[payload.key](
        payload.value,
        data[payload.key]
      );
      return {
        ...state,
        ...obj,
      };
    }
    case Types.ADD_BASEINFO_VALUE: {
      const obj = {};

      if (!inputCheck[payload.key]) {
        return state;
      }
      const v: number = cache[payload.key] + Number(payload.num);
      obj[payload.key] = inputCheck[payload.key](
        v,
        data[payload.key]
      );
      return {
        ...state,
        ...obj,
      };
    }
    case Types.TOGGLE_EDIT_MODE: {
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
  inputValues: inputValues(state.inputValues, action, data.baseInfo),
  isInputError: isInputError(
    state.isInputError,
    action,
    state.inputValues,
    data.baseInfo
  ),
});
