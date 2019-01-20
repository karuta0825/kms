declare type UserDetailPageType = {
  tabIndex: number,
  buttonPrevIsActive: boolean,
  buttonNextIsActive: boolean,
  isFetching: boolean,
  baseInfoTab: UserDetailTabBaseInfoType,
  customerTab: UserDetailTabCustomerType,
  clientTab: UserDetailTabClientType,
  fenicsTab: UserDetailTabFenicsType,
  busivTab: UserDetailTabBusivType,
  licenseTab: UserDetailTabLicenseType,
  partnerTab: {
    inputValues: {},
    canUpdate: boolean,
    isEditing: boolean,
    canCancel: boolean,
  },
  memo: UserDetailMemoType,
};
