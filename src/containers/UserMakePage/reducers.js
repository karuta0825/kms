// @flow
import * as Types from '../../constants/ActionTypes';

type inputType = {
  system_type: string,
  version: string,
  server?: string,
  kid?: string,
};

export const inputValues = (
  state: inputType,
  action: Action
): inputType => {
  const { type, payload } = action;
  switch (type) {
    case Types.SELECT_SYSTEM_TYPE:
      if (payload === 'docomo') {
        return {
          ...state,
          system_type: payload,
          version: 'LM',
          server: '',
          kid: '',
        };
      }
      return {
        ...state,
        system_type: payload,
        version: '',
        server: '',
        kid: '',
      };
    case Types.SELECT_VERSION:
      return {
        ...state,
        version: payload,
        server: '',
      };
    case Types.SELECT_SERVER:
      return {
        ...state,
        server: payload,
      };
    case Types.INPUT_KID:
      return {
        ...state,
        kid: payload,
      };
    default:
      return state;
  }
};

export const canMakeUser = (
  state: boolean,
  action: Action
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.SELECT_SYSTEM_TYPE:
      return payload === 'docomo';
    case Types.SELECT_VERSION:
      return payload !== '';
    case Types.POST_MAKE_USER:
      return false;
    case Types.SUCCESSED_MAKE_USER:
      return true;
    default:
      return state;
  }
};

export const showServer = (
  state: boolean,
  action: Action,
  values: inputType
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.SELECT_SYSTEM_TYPE:
      return payload !== 'onpre';
    case Types.SELECT_VERSION:
      return values.system_type !== 'onpre' && payload !== '';
    default:
      return state;
  }
};

export const showVersion = (
  state: boolean,
  action: Action
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.SELECT_SYSTEM_TYPE:
      return payload !== 'docomo';
    default:
      return state;
  }
};

export const showKid = (state: boolean, action: Action): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.SELECT_SYSTEM_TYPE:
      return payload === 'onpre';
    default:
      return state;
  }
};

export const showDialog = (
  state: boolean,
  action: Action
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_HTTP_POST:
      if (payload.key === 'kids') {
        return true;
      }
      return state;
    case Types.TOGGLE_DIALOG:
      return payload;
    default:
      return state;
  }
};

export const showKID = (state: string, action: Action): string => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_HTTP_POST:
      if (payload.key === 'kids') {
        return `KID${payload.value}が作成されました`;
      }
      return state;
    case Types.TOGGLE_DIALOG:
      return '';
    default:
      return state;
  }
};

// reducer結合
export default (state: UserMakePageType, action: Action) => ({
  inputValues: inputValues(state.inputValues, action),
  showVersion: showVersion(state.showVersion, action),
  showServer: showServer(state.showServer, action, state.inputValues),
  showKid: showKid(state.showKid, action),
  showDialog: showDialog(state.showDialog, action),
  canMakeUser: canMakeUser(state.canMakeUser, action),
  makedUserKID: showKID(state.makedUserKID, action),
});
