// @flow
import * as Types from '../../constants/ActionTypes';
import customerTab from './TabCustomer/reducers';
import baseInfoTab from './TabSystem/reducers';
import liceseTab from './TabLicense/reducers';
import clientTab from './TabClient/reducers';
import fenicsTab from './TabFenics/reducers';
import busivTab from './TabBuisv/reducers';
import historyTab from './TabHistory/reducers';
import partnerTab from './TabPartner/reducers';
import memo from './Memo/reducers';

const tabIndex = (state: number, action): number => {
  const { type, payload } = action;
  switch (type) {
    case Types.SET_TAB_POSITION:
      return payload;
    default:
      return state;
  }
};

const buttonPrevIsActive = (state, action): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.TOGGLE_PREV_NEXT_BUTTON:
      return payload.hasPrev;
    default:
      return state;
  }
};

const buttonNextIsActive = (state, action): boolean => {
  const { type, payload } = action;
  switch (type) {
    case Types.TOGGLE_PREV_NEXT_BUTTON:
      return payload.hasNext;
    default:
      return state;
  }
};

const isFetching = (state, action: Action): boolean => {
  const { type } = action;
  switch (type) {
    case Types.FETCH_USERINFO:
      return true;
    case Types.SUCCESSED_FETCH_USERINFO:
      return false;
    case Types.FAILED_FETCH_USERINFO:
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
  buttonPrevIsActive: buttonPrevIsActive(
    state.buttonPrevIsActive,
    action
  ),
  buttonNextIsActive: buttonNextIsActive(
    state.buttonNextIsActive,
    action
  ),
  baseInfoTab: baseInfoTab(state.baseInfoTab, action, data),
  customerTab: customerTab(state.customerTab, action, data),
  licenseTab: liceseTab(state.licenseTab, action, data),
  clientTab: clientTab(state.clientTab, action, data),
  fenicsTab: fenicsTab(state.fenicsTab, action, data),
  busivTab: busivTab(state.busivTab, action, data),
  partnerTab: partnerTab(state.partnerTab, action, data),
  historyTab: historyTab(state.historyTab, action),
  memo: memo(state.memo, action, data),
});
