declare type UserDetailPageType = {
  tabIndex: number,
  buttonPrevIsActive: boolean,
  buttonNextIsActive: boolean,
  isFetching: boolean,
  baseInfoTab: UserDetailTabBaseInfoType,
  customerTab: UserDetailTabCustomerType,
  licenseTab: {
    selected: Array<String>,
    canUpdate: boolean,
    isEditing: boolean,
    canCancel: boolean,
  },
  partnerTab: {
    inputValues: {},
    canUpdate: boolean,
    isEditing: boolean,
    canCancel: boolean,
  },
};
