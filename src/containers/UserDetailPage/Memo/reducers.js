// @flow
import {
  TOGGLE_MEMO_MODAL,
  SET_MEMO_TEMPLATE,
  CHANGE_MEMO_VALUE,
  SELECT_MEMO,
  CREATE_MEMO,
  FILTER_MEMO,
  TOGGLE_MODAL,
} from '../../../constants/ActionTypes';

const memoFilter = (
  state: MemoPriorityType,
  action: Action
): MemoPriorityType => {
  const { type, payload } = action;
  switch (type) {
    case FILTER_MEMO:
      return payload;
    default:
      return state;
  }
};

const isModalOpen = (
  state: boolean,
  action: Action
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_MODAL:
      if (payload.name === 'memo') {
        return payload.isOpen;
      }
      return state;
    case CREATE_MEMO:
      return true;
    default:
      return state;
  }
};

const isNew = (state: boolean, action: Action): boolean => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_MEMO:
      return true;
    case TOGGLE_MEMO_MODAL:
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
    case CHANGE_MEMO_VALUE: {
      const obj = {};
      obj[payload.key] = payload.value;
      return { ...state, ...obj };
    }
    case TOGGLE_MEMO_MODAL: {
      const obj = {};
      return !payload ? obj : state;
    }
    case CREATE_MEMO:
      return { priority: 'emergency' };
    case SELECT_MEMO: {
      const [target] = data.memos.filter(
        memo => memo.id === payload
      );
      return target;
    }
    case SET_MEMO_TEMPLATE: {
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

const selectedTemplate = (
  state: string,
  action: Action
): string => {
  const { type, payload } = action;
  switch (type) {
    case SET_MEMO_TEMPLATE: {
      return payload;
    }
    case TOGGLE_MEMO_MODAL:
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
  selectedTemplate: selectedTemplate(
    state.selectedTemplate,
    action
  ),
});
