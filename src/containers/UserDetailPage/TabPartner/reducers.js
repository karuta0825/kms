// @flow
import * as Types from '../../../constants/ActionTypes';
import inputChecks from '../../../utils/inputChecks';

const inputCheck = {
  sa_postal_cd: inputChecks.telFax,
  sa_tel: inputChecks.telFax,
  sa_fax: inputChecks.telFax,
  sa_email: inputChecks.email,
  se_postal_cd: inputChecks.telFax,
  se_tel: inputChecks.telFax,
  se_fax: inputChecks.telFax,
  se_email: inputChecks.email,
  em_tel: inputChecks.telFax,
  em_email: inputChecks.email,
};

const isEdit = (state: boolean, action, tabName: string): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.TOGGLE_EDIT_MODE:
      if (payload.tabName === tabName) {
        return payload.isEdit;
      }
      return state;
    case Types.HTTP_PUT_PARTNERS:
      return false;
    case Types.FETCH_USERINFO:
      return false;
    default:
      return state;
  }
};

const inputValues = (
  state: PartnerType,
  action: Action,
  cache: PartnerType
): PartnerType => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_FETCH_USERINFO:
      return payload.partner[0];
    case Types.TOGGLE_EDIT_MODE:
      if (payload.tabName === 'PARTNER' && !payload.isEdit) {
        return cache;
      }
      return state;
    case Types.CHANGE_PARTNER_VALUE: {
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
    case Types.CHANGE_PARTNER_VALUE: {
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
    case Types.TOGGLE_EDIT_MODE: {
      if (payload.tabName === 'PARTNER' && !payload.isEdit) {
        return {
          ...state,
          sa_postal_cd: false,
          sa_tel: false,
          sa_fax: false,
          sa_email: false,
          se_postal_cd: false,
          se_tel: false,
          se_fax: false,
          se_email: false,
          em_tel: false,
          em_email: false,
        };
      }
      return state;
    }
    default:
      return state;
  }
};

export default (
  state: UserDetailTabPartnerType,
  action: Action,
  data: CombineDataType
) => ({
  isEdit: isEdit(state.isEdit, action, 'PARTNER'),
  inputValues: inputValues(state.inputValues, action, data.partners),
  isInputError: isInputError(state.isInputError, action),
});
