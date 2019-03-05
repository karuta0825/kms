import * as Types from '../constants/ActionTypes';

export default (
  state: Array<MemoTemplateType>,
  action: Action
): Array<MemoTemplateType> => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_HTTP_GET:
      if (payload.key === 'memoTemplates') {
        return payload.value;
      }
      return state;
    case Types.SUCCESSED_HTTP_PUT:
      if (payload.key === 'memoTemplates') {
        return payload.value;
      }
      return state;
    case Types.SUCCESSED_HTTP_DELETE:
      if (payload.key === 'memoTemplates') {
        return payload.value;
      }
      return state;
    case Types.SUCCESSED_HTTP_POST:
      if (payload.key === 'memoTemplates') {
        return payload.value;
      }
      return state;
    case Types.FAILED_HTTP_GET:
      return state;
    default:
      return state;
  }
};
