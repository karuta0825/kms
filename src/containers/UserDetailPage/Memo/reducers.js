// @flow
import {
  TOGGLE_MEMO_MODAL,
  SELECT_MEMO_TEMPLATE,
  CHANGE_MEMO_VALUE,
} from '../../../constants/ActionTypes';

const isModalOpen = (
  state: boolean,
  action: Action
): boolean => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_MEMO_MODAL:
      return payload;
    default:
      return state;
  }
};

const isNew = (state: boolean, action: Action): boolean => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

const inputValues = (
  state: MemoType,
  action: Action,
  data: CombineDataType
): MemoType => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_MEMO_VALUE: {
      const obj = {};
      obj[payload.key] = payload.value;
      return { ...state, ...obj };
    }
    case SELECT_MEMO_TEMPLATE: {
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
    case SELECT_MEMO_TEMPLATE: {
      return payload;
    }
    default:
      return state;
  }
};

export default (
  state: UserDetailMemoType,
  action: Action,
  data: CombineDataType
) => ({
  isModalOpen: isModalOpen(state.isModalOpen, action),
  isNew: isNew(state.isNew, action),
  inputValues: inputValues(state.inputValues, action, data),
  selectedTemplate: selectedTemplate(
    state.selectedTemplate,
    action
  ),
});
