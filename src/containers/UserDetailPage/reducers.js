// @flow
import { SET_TAB_POSITION } from '../../constants/ActionTypes';
import customerTab from './TabCustomer/reducers';
import baseInfoTab from './TabSystem/reducers';
import liceseTab from './TabLicense/reducers';

const tabIndex = (state: number, action): number => {
  const { type, payload } = action;
  switch (type) {
    case SET_TAB_POSITION:
      return payload;
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

export default (
  state: UserDetailPageType,
  action: Action,
  data: CombineDataType
) => ({
  tabIndex: tabIndex(state.tabIndex, action),
  buttonPrevIsActive: buttonIsActive(
    state.buttonPrevIsActive,
    action
  ),
  buttonNextIsActive: buttonIsActive(
    state.buttonNextIsActive,
    action
  ),
  baseInfoTab: baseInfoTab(state.baseInfoTab, action, data),
  customerTab: customerTab(state.customerTab, action, data),
  licenseTab: liceseTab(state.licenseTab, action, data),
});
