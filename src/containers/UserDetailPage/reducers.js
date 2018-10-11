// @flow
import { SET_TAB_POSITION } from '../../constants/ActionTypes';
import initState from '../../initState';

type Action = {
  type: string,
  payload: any,
};

const { userDetailPage } = initState;

const tabIndex = (state: number, action): number => {
  const { type, payload } = action;

  switch (type) {
    case SET_TAB_POSITION:
      return payload;
    default:
      return state;
  }
};


export default (state = userDetailPage, action: Action) => ({
  tabIndex: tabIndex(state.tabIndex, action),
});
