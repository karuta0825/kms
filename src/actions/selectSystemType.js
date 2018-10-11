import { SELECT_SYSTEM_TYPE } from '../constants/ActionTypes';

const selecSystemType = (type: string) => ({
  type: SELECT_SYSTEM_TYPE,
  payload: type,
});

export default selecSystemType;
