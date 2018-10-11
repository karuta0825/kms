import { TOGGLE_DRAWER } from '../constants/ActionTypes';

const toggleDrawer = (isOpen: boolean) => ({
  type: TOGGLE_DRAWER,
  payload: isOpen,
});

export default toggleDrawer;
