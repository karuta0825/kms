import { TOGGLE_BUTTON_DISABLE } from '../constants/ActionTypes';

const toggleButtonDisable = (disable: boolean) => ({
  type: TOGGLE_BUTTON_DISABLE,
  payload: disable,
});

export default toggleButtonDisable;
