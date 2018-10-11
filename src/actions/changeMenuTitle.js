import { CHANGE_MENU_TITLE } from '../constants/ActionTypes';

const changeMenuTitle = (title: string) => ({
  type: CHANGE_MENU_TITLE,
  payload: title,
});

export default changeMenuTitle;
