import { BAR_ANCHOR_ELEMENT } from '../constants/ActionTypes';

const bar = (element) => ({
  type: BAR_ANCHOR_ELEMENT,
  payload: element,
})

export default bar;
