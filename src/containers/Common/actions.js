import * as Types from '../../constants/ActionTypes';

export const changeTitle = (title: string) => ({
  type: Types.CHANGE_MENU_TITLE,
  payload: title,
});

export const changeLocation = (location: string) => ({
  type: Types.CHANGE_LOCATION,
  payload: location,
});

export const toggleDrawer = (isOpen: boolean) => ({
  type: Types.TOGGLE_DRAWER,
  payload: isOpen,
});

export const toggleModal = (isOpen: boolean, name: string) => ({
  type: Types.TOGGLE_MODAL,
  payload: { isOpen, name },
});

export const toggleEdit = (isEdit: boolean, name: string) => ({
  type: Types.TOGGLE_EDIT_MODE,
  payload: { isEdit, name },
});
