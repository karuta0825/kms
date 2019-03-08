declare type StateType = {
  location: string,
  header: {
    title: string,
  },
  dialog: {
    title: string,
    msg: string,
    isOpen: boolean,
  },
  topPage: TopPageType,
  userMakePage: UserMakePageType,
  userRegisterPage: UserRegisterPageType,
  userListPage: UserListPageType,
  userDetailPage: UserDetailPageType,
  serverManagePage: ServerManagePageType,
  serviceManagePage: ServiceManagePageType,
  templateManagePage: TemplateManagePageType,
  partnerListPage: PartnerListPageType,
  fenicsListPage: FenicsListPageType,
  accountManagePage: AccountManagePageType,
  data: CombineDataType,
};
