declare type StateType = {
  location: string,
  header: {
    title: string,
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
