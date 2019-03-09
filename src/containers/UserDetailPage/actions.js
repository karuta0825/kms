// @flow
import * as Types from '../../constants/ActionTypes';

export const changeTabIndex = (index: number) => ({
  type: Types.SET_TAB_POSITION,
  payload: index,
});

export const getUserInfo = (id: number) => ({
  type: Types.FETCH_USERINFO,
  payload: id,
});

export const toggleEditMode = (isEdit: boolean, tabName: string) => ({
  type: Types.TOGGLE_EDIT_MODE,
  payload: { isEdit, tabName },
});

export const togglePrevNexButton = ({
  hasPrev,
  hasNext,
}: {
  hasPrev: boolean,
  hasNext: boolean,
}) => ({
  type: Types.TOGGLE_PREV_NEXT_BUTTON,
  payload: {
    hasPrev,
    hasNext,
  },
});

export const toggleDeleteModal = (isOpen: boolean, name: string) => ({
  type: Types.TOGGLE_DELETE_MODAL,
  payload: { isOpen, name },
});
