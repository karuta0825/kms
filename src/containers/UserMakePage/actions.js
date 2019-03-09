// @flow
import * as Types from '../../constants/ActionTypes';

export const showVersion = (systemType: string) => ({
  type: Types.SHOW_VERSION,
  payload: systemType,
});

export const showServer = (version: string) => ({
  type: Types.SHOW_SERVER,
  payload: version,
});

export const selectSystemType = (type: string) => ({
  type: Types.SELECT_SYSTEM_TYPE,
  payload: type,
});

export const selectVersion = (version: string) => ({
  type: Types.SELECT_VERSION,
  payload: version,
});

export const selectServer = (server: string) => ({
  type: Types.SELECT_SERVER,
  payload: server,
});

export const inputKid = (kid: string) => ({
  type: Types.INPUT_KID,
  payload: kid,
});

export const toggleDialog = (isOpen: boolean) => ({
  type: Types.TOGGLE_DIALOG,
  payload: isOpen,
});

// どうやってstateの値を渡せるか?
export const makeUser = inputValues => ({
  type: Types.HTTP_POST_KIDS,
  payload: inputValues,
});
