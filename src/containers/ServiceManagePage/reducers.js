import { SELECT_SERVICE_VERSION } from '../../constants/ActionTypes';

const selectedIndex = (
  state: number,
  action: Action
): number => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_SERVICE_VERSION:
      return payload;
    default:
      return state;
  }
};

export default (state, action: Action) => ({
  selectedIndex: selectedIndex(state.selectedIndex, action),
});
