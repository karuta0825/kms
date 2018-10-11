import { SET_TAB_POSITION } from '../constants/ActionTypes';

const setTabPosition = (position: number) => {
  return {
    type: SET_TAB_POSITION,
    payload: position,
  };
};

export default setTabPosition;
