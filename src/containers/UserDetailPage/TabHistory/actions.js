// @flow
import {
  SELECT_HISTORY,
  TOGGLE_DELETE_MODAL,
  FILTER_HISTORY,
} from '../../../constants/ActionTypes';

export const selectHistory = (num: number) => ({
  type: SELECT_HISTORY,
  payload: num,
});

export const toggleDeleteModal = (isOpen: boolean) => ({
  type: TOGGLE_DELETE_MODAL,
  payload: isOpen,
});

export const filterHistory = (value: string) => ({
  type: FILTER_HISTORY,
  payload: value,
});
