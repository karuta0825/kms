// @flow
import {
  SELECT_SYSTEM_TYPE,
  SELECT_VERSION,
  SELECT_SERVER,
  SHOW_VERSION,
  SHOW_SERVER,
  INPUT_KID,
  POST_MAKE_USER,
} from '../../constants/ActionTypes';


export const showVersion = (systemType: string) => ({
  type: SHOW_VERSION,
  payload: systemType,
});

export const showServer = (version: string) => ({
  type: SHOW_SERVER,
  payload: version,
});

export const selectSystemType = (type: string) => ({
  type: SELECT_SYSTEM_TYPE,
  payload: type,
});

export const selectVersion = (version: string) => ({
  type: SELECT_VERSION,
  payload: version,
});

export const selectServer = (server: string) => ({
  type: SELECT_SERVER,
  payload: server,
});

export const inputKid = (kid: string) => ({
  type: INPUT_KID,
  payload: kid,
});

// どうやってstateの値を渡せるか?
export const makeUser = () => ({
  type: POST_MAKE_USER,
  payload: false,
});
