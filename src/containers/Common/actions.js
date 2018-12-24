import {
  CHANGE_MENU_TITLE,
  CHANGE_LOCATION,
  TOGGLE_DRAWER,
} from '../../constants/ActionTypes';

export const changeTitle = (title: string) => ({
  type: CHANGE_MENU_TITLE,
  payload: title,
});

export const changeLocation = (location: string) => ({
  type: CHANGE_LOCATION,
  payload: location,
});

export const toggleDrawer = (isOpen: boolean) => ({
  type: TOGGLE_DRAWER,
  payload: isOpen,
});
