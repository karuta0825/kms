import { TOGGLE_SIDE_BAR } from '../constants/ActionTypes';

const toggleSideBar = (isOpen: boolean) => ({
  type: TOGGLE_SIDE_BAR,
  payload: isOpen,
});

export default toggleSideBar;
