import {
  TOGGLE_EDIT_MODE,
  SUCCESSED_FETCH_USERINFO,
  CHANGE_CUSTOMER_VALUE,
  SELECT_BASE_INDEX,
  CHANGE_NEWBASE_MODE,
} from '../../../constants/ActionTypes';
import inputChecks from '../../../utils/inputChecks';

const inputCheck = {
  postal_cd: inputChecks.telFax,
  tel: inputChecks.telFax,
  fax: inputChecks.telFax,
  email: inputChecks.email,
};

const choiceBaseIdx = (
  state: number,
  action: Action
): number => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_BASE_INDEX:
      return payload;
    case CHANGE_NEWBASE_MODE:
      return payload ? -1 : 0;
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
    case CHANGE_NEWBASE_MODE: {
      const initValue = {
        ...state,
        base_id: -1,
        base_name: '',
        postal_cd: '',
        address: '',
        owner: '',
        affliation: '',
        tel: '',
        fax: '',
        email: '',
        has_busiv: 0,
        has_fenics: 0,
        has_mobile: 0,
      };
      return payload ? initValue : cache[0];
    }
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
    case CHANGE_NEWBASE_MODE:
      return payload;
    default:
      return state;
  }
};

const isInputError = (state, action: Action): Object => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_CUSTOMER_VALUE: {
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
      if (payload.tabName === 'CUSTOMER' && !payload.isEdit) {
        return {
          ...state,
          postal_cd: false,
          tel: false,
          fax: false,
          email: false,
        };
      }
      return state;
    }
    default:
      return state;
  }
};

const isAddBaseMode = (
  state: boolean,
  action: Action
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_NEWBASE_MODE:
      return payload;
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
  isAddBaseMode: isAddBaseMode(state.isAddBaseMode, action),
  inputValues: inputValues(
    state.inputValues,
    action,
    state.selectedIndex,
    data.customers
  ),
  isInputError: isInputError(state.isInputError, action),
});
