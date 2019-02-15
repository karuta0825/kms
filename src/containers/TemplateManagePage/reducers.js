import {
  TOGGLE_NEW_MEMOTEMPLATE_MODE,
  SELECT_MEMO_TEMPLATE,
  CHANGE_MEMO_TEMPLATE_VALUE,
  TOGGLE_TEMPLATE_DELETE_MODAL,
  POST_MEMO_TEMPLATE,
  SUCCESSED_POST_MEMO_TEMPLATE,
  DELETE_MEMO_TEMPLATE,
  PUT_MEMO_TEMPLATE,
} from '../../constants/ActionTypes';

const selectedIndex = (
  state: number,
  action: Action
): number => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_MEMO_TEMPLATE:
      return payload;
    case TOGGLE_NEW_MEMOTEMPLATE_MODE:
      return payload ? -1 : 0;
    case SUCCESSED_POST_MEMO_TEMPLATE:
      return -1;
    default:
      return state;
  }
};

const isNewMode = (state: boolean, action: Action): boolean => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_NEW_MEMOTEMPLATE_MODE:
      return payload;
    case SELECT_MEMO_TEMPLATE:
      return false;
    case SUCCESSED_POST_MEMO_TEMPLATE:
      return true;
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
    case TOGGLE_TEMPLATE_DELETE_MODAL:
      return payload;
    case DELETE_MEMO_TEMPLATE:
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
    case POST_MEMO_TEMPLATE:
      return true;
    case DELETE_MEMO_TEMPLATE:
      return true;
    case PUT_MEMO_TEMPLATE:
      return true;
    case SUCCESSED_POST_MEMO_TEMPLATE:
      return false;
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
    case SELECT_MEMO_TEMPLATE: {
      return cache.length > 1
        ? cache[payload]
        : { title: '', msg: '' };
    }
    case CHANGE_MEMO_TEMPLATE_VALUE: {
      const obj = {};
      obj[payload.key] = payload.value;
      return {
        ...state,
        ...obj,
      };
    }
    case TOGGLE_NEW_MEMOTEMPLATE_MODE:
      return payload ? { title: '', msg: '' } : state;
    case SUCCESSED_POST_MEMO_TEMPLATE:
      return { title: '', msg: '' };
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
