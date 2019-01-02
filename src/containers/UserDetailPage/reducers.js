// @flow
import {
  SET_TAB_POSITION,
  FETCH_USERINFO,
  SUCCESSED_FETCH_USERINFO,
  FAILED_FETCH_USERINFO,
} from '../../constants/ActionTypes';
import customerTab from './TabCustomer/reducers';
import baseInfoTab from './TabSystem/reducers';
import liceseTab from './TabLicense/reducers';
import clientTab from './TabClient/reducers';

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
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

const isFetching = (state, action: Action): boolean => {
  const { type } = action;
  switch (type) {
    case FETCH_USERINFO:
      return true;
    case SUCCESSED_FETCH_USERINFO:
      return false;
    case FAILED_FETCH_USERINFO:
      return false;
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
  isFetching: isFetching(state.isFetching, action),
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
  clientTab: clientTab(state.clientTab, action, data),
});
