// @flow
import { TOGGLE_MEMO_MODAL } from '../../../constants/ActionTypes';

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
  action: Action
): MemoType => {
  const { type, payload } = action;
  switch (type) {
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
});
