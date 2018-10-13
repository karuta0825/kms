// @flow
import {
  SELECT_SYSTEM_TYPE,
  SELECT_VERSION,
  SELECT_SERVER,
  POST_MAKE_USER,
  SUCCESSED_MAKE_USER,
  INPUT_KID,
  TOGGLE_DIALOG,
} from '../../constants/ActionTypes';
import initState from '../../initState';

const { userMakePage } = initState;

type inputType = {
  systemType: string,
  version: string,
  server: string,
  kid: string,
};

type StateType = {
  showVersion: boolean,
  showServer: boolean,
  showKid: boolean,
  showDialog: boolean,
  canMakeUser: boolean,
  inputValues: inputType,
};

type Action = {
  type: string,
  payload: any,
};

export const inputValues = (
  state: inputType,
  action: Action,
): inputType => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_SYSTEM_TYPE:
      if (payload === 'docomo') {
        return {
          ...state,
          systemType: payload,
          version: 'LM',
          server: '',
          kid: '',
        };
      }
      return {
        ...state,
        systemType: payload,
        version: '',
        server: '',
        kid: '',
      };
    case SELECT_VERSION:
      return {
        ...state,
        version: payload,
        server: '',
      };
    case SELECT_SERVER:
      return {
        ...state,
        server: payload,
      };
    case INPUT_KID:
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
  action: Action,
  { inputValues }: { inputValues: inputType },
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_SYSTEM_TYPE:
      return payload === 'docomo';
    case SELECT_VERSION:
      return payload !== '';
    case POST_MAKE_USER:
      return false;
    case SUCCESSED_MAKE_USER:
      return true;
    default:
      return state;
  }
};

export const showServer = (
  state: boolean,
  action: Action,
  { inputValues }: { inputValues: inputType },
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_SYSTEM_TYPE:
      return payload !== 'onpre';
    case SELECT_VERSION:
      return inputValues.systemType !== 'onpre' && payload !== '';
    default:
      return state;
  }
};

export const showVersion = (
  state: boolean,
  action: Action,
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_SYSTEM_TYPE:
      return payload !== 'docomo';
    default:
      return state;
  }
};

export const showKid = (
  state: boolean,
  action: Action,
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_SYSTEM_TYPE:
      return payload === 'onpre';
    default:
      return state;
  }
};

export const showDialog = (
  state: boolean,
  action: Action,
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case SUCCESSED_MAKE_USER:
      return true;
    case TOGGLE_DIALOG:
      return payload;
    default:
      return state;
  }
};

export const showKID = (
  state: string,
  action: Action,
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case SUCCESSED_MAKE_USER:
      return `${payload}が作成されました`;
    case TOGGLE_DIALOG:
      return '';
    default:
      return state;
  }
}

// reducer結合
export default (state: StateType = userMakePage, action: Action) => ({
  inputValues: inputValues(state.inputValues, action),
  showVersion: showVersion(state.showVersion, action),
  showServer: showServer(state.showServer, action, state),
  showKid: showKid(state.showKid, action),
  showDialog: showDialog(state.showDialog, action),
  canMakeUser: canMakeUser(state.canMakeUser, action, state),
  makedUserKID: showKID(state.makedUserKID, action),
});
