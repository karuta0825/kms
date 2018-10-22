import {
  CHANGE_MENU_TITLE,
  CHANGE_LOCATION,
} from '../../constants/ActionTypes';

export const changeTitle = (title: string) => ({
  type: CHANGE_MENU_TITLE,
  payload: title,
});

export const changeLocation = (location: string) => ({
  type: CHANGE_LOCATION,
  payload: location,
});
