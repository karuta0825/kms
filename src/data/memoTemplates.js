import {
  SUCCESSED_FETCH_MEMOTEMPLATES,
  FAILED_FETCH_MEMOTEMPLATES,
} from '../constants/ActionTypes';

export default (
  state: Array<MemoTemplateType>,
  action: Action
): Array<MemoTemplateType> => {
  const { type, payload } = action;
  switch (type) {
    case SUCCESSED_FETCH_MEMOTEMPLATES:
      return payload;
    case FAILED_FETCH_MEMOTEMPLATES:
      return state;
    default:
      return state;
  }
};
