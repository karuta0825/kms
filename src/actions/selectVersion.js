import { SELECT_VERSION } from '../constants/ActionTypes';

const selectVersion = (version: string) => ({
  type: SELECT_VERSION,
  payload: version,
});

export default selectVersion;
