// @flow
import * as Types from '../../../constants/ActionTypes';

const memoFilter = (
  state: MemoPriorityType,
  action: Action
): MemoPriorityType => {
  const { type, payload } = action;
  switch (type) {
    case Types.FILTER_MEMO:
      return payload;
    default:
      return state;
  }
};

const isModalOpen = (state: boolean, action: Action): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.TOGGLE_MODAL:
      if (payload.name === 'memo') {
        return payload.isOpen;
      }
      return state;
    case Types.CREATE_MEMO:
      return true;
    case Types.HTTP_PUT_MEMOS:
      return false;
    case Types.HTTP_POST_MEMOS:
      return false;
    case Types.HTTP_DELETE_MEMOS:
      return false;
    default:
      return state;
  }
};

const isNew = (state: boolean, action: Action): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.CREATE_MEMO:
      return true;
    case Types.SELECT_MEMO:
      return false;
    case Types.TOGGLE_MEMO_MODAL:
      return !payload ? false : state;
    default:
      return state;
  }
};

const inputValues = (
  state: MemoType,
  action: Action,
  data: CombineDataType
): Object | MemoType => {
  const { type, payload } = action;
  switch (type) {
    case Types.CHANGE_MEMO_VALUE: {
      const obj = {};
      obj[payload.key] = payload.value;
      return { ...state, ...obj };
    }
    case Types.TOGGLE_MEMO_MODAL: {
      const obj = {};
      return !payload ? obj : state;
    }
    case Types.CREATE_MEMO:
      return { priority: 'emergency' };
    case Types.SELECT_MEMO: {
      const [target] = data.memos.filter(memo => memo.id === payload);
      return target;
    }
    case Types.SET_MEMO_TEMPLATE: {
      const [target] = data.memoTemplates.filter(
        template => template.title === payload
      );
      return {
        ...state,
        message: target.msg,
      };
    }
    default:
      return state;
  }
};

const selectedTemplate = (state: string, action: Action): string => {
  const { type, payload } = action;
  switch (type) {
    case Types.SET_MEMO_TEMPLATE: {
      return payload;
    }
    case Types.TOGGLE_MEMO_MODAL:
      return !payload ? '' : state;
    default:
      return state;
  }
};

export default (
  state: UserDetailMemoType,
  action: Action,
  data: CombineDataType
) => ({
  filter: memoFilter(state.filter, action),
  isModalOpen: isModalOpen(state.isModalOpen, action),
  isNew: isNew(state.isNew, action),
  inputValues: inputValues(state.inputValues, action, data),
  selectedTemplate: selectedTemplate(state.selectedTemplate, action),
});
