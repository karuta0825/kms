// @flow
import {
  SET_TAB_POSITION,
  TOGGLE_EDIT_MODE,
} from '../../constants/ActionTypes';
import customerTab from './TabCustomer/reducers';

const tabIndex = (state: number, action): number => {
  const { type, payload } = action;

  switch (type) {
    case SET_TAB_POSITION:
      return payload;
    default:
      return state;
  }
};

const isEdit = (state: boolean, action, tabName: string): boolean => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_EDIT_MODE:
      if (payload.tabName === tabName) {
        return payload.isEdit;
      }
      return state;
    default:
      return state;
  }
};

const buttonIsActive = (state, action): boolean => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

const baseInfoTab = (state, action) => ({
  isEdit: isEdit(state.isEdit, action, 'SYSTEM'),
});

export default (
  state: UserDetailPageType,
  action: Action,
  data: CombineDataType
) => ({
  tabIndex: tabIndex(state.tabIndex, action),
  buttonPrevIsActive: buttonIsActive(state.buttonPrevIsActive, action),
  buttonNextIsActive: buttonIsActive(state.buttonNextIsActive, action),
  baseInfoTab: baseInfoTab(state.baseInfoTab, action),
  customerTab: customerTab(state.customerTab, action, data),
});
