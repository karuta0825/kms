import { TOGGLE_MEMO_MODAL } from '../../../constants/ActionTypes';

export const toggleModal = (isOpen: boolean) => ({
  type: TOGGLE_MEMO_MODAL,
  payload: isOpen,
});
