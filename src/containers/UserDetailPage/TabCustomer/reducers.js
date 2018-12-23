import {
  TOGGLE_EDIT_MODE,
  SUCCESSED_FETCH_USERINFO,
  CHANGE_CUSTOMER_VALUE,
  SELECT_BASE_INDEX,
} from '../../../constants/ActionTypes';

const choiceBaseIdx = (
  state: number,
  action: Action
): number => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_BASE_INDEX:
      return payload;
    default:
      return state;
  }
};

const inputValues = (
  state: Object,
  action: Action,
  index: number,
  cache: CustomerType
): Object => {
  const { type, payload } = action;
  switch (type) {
    case SUCCESSED_FETCH_USERINFO:
      return payload.customer[index];
    case TOGGLE_EDIT_MODE:
      if (payload.tabName === 'CUSTOMER' && !payload.isEdit) {
        return cache[index];
      }
      return state;
    case SELECT_BASE_INDEX:
      return cache[payload];
    case CHANGE_CUSTOMER_VALUE: {
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
    case SELECT_BASE_INDEX:
      return false;
    default:
      return state;
  }
};

export default (
  state: UserDetailTabCustomerType,
  action: Action,
  data: CombineDataType
): UserDetailTabCustomerType => ({
  isEdit: isEdit(state.isEdit, action, 'CUSTOMER'),
  selectedIndex: choiceBaseIdx(state.selectedIndex, action),
  inputValues: inputValues(
    state.inputValues,
    action,
    state.selectedIndex,
    data.customers
  ),
});
