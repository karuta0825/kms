// @flow
import {
  TOGGLE_EDIT_MODE,
  SELECT_BUSIV_BASE_INDEX,
  SUCCESSED_FETCH_USERINFO,
  CHANGE_BUSIV_VALUE,
  CHANGE_BASEINFO_VALUE,
} from '../../../constants/ActionTypes';
import checkers from '../../../utils/inputChecks';

const inputCheck = {
  cc_ip: checkers.isIP,
};

const choiceBaseIdx = (
  state: number,
  action: Action
): number => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_BUSIV_BASE_INDEX:
      return payload;
    default:
      return state;
  }
};

const isEdit = (state: boolean, action: Action): boolean => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_EDIT_MODE: {
      if (payload.tabName === 'BUSIV') {
        return payload.isEdit;
      }
      return state;
    }
    default:
      return state;
  }
};

const inputValues = (
  state: Object,
  action: Action,
  index: number,
  cache: Array<BusivType>
): Object => {
  const { type, payload } = action;
  switch (type) {
    case SUCCESSED_FETCH_USERINFO:
      return payload.busiv[index];
    case TOGGLE_EDIT_MODE:
      if (payload.tabName === 'BUSIV' && !payload.isEdit) {
        return (cache[index] && cache[index]) || {};
      }
      return state;
    case SELECT_BUSIV_BASE_INDEX:
      return (cache[payload] && cache[payload]) || {};
    case CHANGE_BUSIV_VALUE: {
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

const isInputError = (state, action: Action): Object => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_BUSIV_VALUE: {
      const obj = {};
      if (!inputCheck[payload.key]) return state;
      obj[payload.key] = inputCheck[payload.key](payload.value);
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
  state: UserDetailTabBusivType,
  action: Action,
  data: CombineDataType
) => ({
  isEdit: isEdit(state.isEdit, action),
  selectedIndex: choiceBaseIdx(state.selectedIndex, action),
  inputValues: inputValues(
    state.inputValues,
    action,
    state.selectedIndex,
    data.busivs
  ),
  isInputError: isInputError(state.isInputError, action),
});
