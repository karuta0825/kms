import * as Types from '../../constants/ActionTypes';

const selectedIndex = (
  state: number,
  action: Action
): number => {
  const { type, payload } = action;
  switch (type) {
    case Types.SELECT_MEMO_TEMPLATE:
      return payload;
    case Types.TOGGLE_NEW_MEMOTEMPLATE_MODE:
      return payload ? -1 : 0;
    case Types.SUCCESSED_HTTP_DELETE:
      if (payload.key === 'memoTemplates') {
        return -1;
      }
      return state;
    default:
      return state;
  }
};

const isNewMode = (state: boolean, action: Action): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.TOGGLE_NEW_MEMOTEMPLATE_MODE:
      return payload;
    case Types.SELECT_MEMO_TEMPLATE:
      return false;
    case Types.SUCCESSED_HTTP_DELETE:
      if (payload.key === 'memoTemplates') {
        return true;
      }
      return state;
    default:
      return state;
  }
};

const isOpenDeleteModal = (
  state: boolean,
  action: Action
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.TOGGLE_MODAL:
      if (payload.name === 'memoTemplate') {
        return payload.isOpen;
      }
      return state;
    case Types.HTTP_DELETE:
      return false;
    default:
      return state;
  }
};

const isOpenUpdateModal = (
  state: boolean,
  action: Action
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.HTTP_POST:
      if (payload.key === 'memoTemplates') {
        return true;
      }
      return state;
    case Types.SUCCESSED_HTTP_POST:
      if (payload.key === 'memoTemplates') {
        return false;
      }
      return state;
    case Types.HTTP_DELETE:
      if (payload.key === 'memoTemplates') {
        return true;
      }
      return state;
    case Types.SUCCESSED_HTTP_DELETE:
      if (payload.key === 'memoTemplates') {
        return false;
      }
      return state;
    case Types.HTTP_PUT:
      if (payload.key === 'memoTemplates') {
        return true;
      }
      return state;
    case Types.SUCCESSED_HTTP_PUT:
      if (payload.key === 'memoTemplates') {
        return false;
      }
      return state;
    default:
      return state;
  }
};

const inputValues = (
  state: Object,
  action: Action,
  cache: Array<MemoTemplateType>
): Object => {
  const { type, payload } = action;
  switch (type) {
    case Types.SELECT_MEMO_TEMPLATE: {
      return cache.length > 1
        ? cache[payload]
        : { title: '', msg: '' };
    }
    case Types.CHANGE_MEMO_TEMPLATE_VALUE: {
      const obj = {};
      obj[payload.key] = payload.value;
      return {
        ...state,
        ...obj,
      };
    }
    case Types.TOGGLE_NEW_MEMOTEMPLATE_MODE:
      return payload ? { title: '', msg: '' } : state;
    case Types.SUCCESSED_HTTP_POST:
      if (payload.key === 'memoTemplates') {
        return { title: '', msg: '' };
      }
      return state;
    case Types.SUCCESSED_HTTP_DELETE:
      if (payload.key === 'memoTemplates') {
        return { title: '', msg: '' };
      }
      return state;
    default:
      return state;
  }
};

export default (
  state: TemplateManagePageType,
  action: Action,
  data: CombineDataType
) => ({
  selectedIndex: selectedIndex(state.selectedIndex, action),
  isNewMode: isNewMode(state.isNewMode, action),
  isOpenDeleteModal: isOpenDeleteModal(
    state.isOpenDeleteModal,
    action
  ),
  isOpenUpdateModal: isOpenUpdateModal(
    state.isOpenUpdateModal,
    action
  ),
  inputValues: inputValues(
    state.inputValues,
    action,
    data.memoTemplates
  ),
});
