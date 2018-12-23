// @flow
const initState: StateType = {
  location: 'home',
  header: {
    title: 'ホーム',
  },
  topPage: {},
  userMakePage: {
    showVersion: false,
    showServer: false,
    showKid: false,
    showDialog: false,
    canMakeUser: false,
    inputValues: {
      systemType: '',
      version: '',
      server: '',
      kid: '',
    },
    makedUserKID: '',
  },
  userRegisterPage: {
    canUploadFile: false,
    isUploading: false,
  },
  userListPage: {
    isFilterOpen: false,
    filter: {
      keyword: '',
      isOnpre: false,
      isCloud: false,
      isDemo: false,
      isKensyo: false,
      isES: false,
      isLM: false,
      hasMobile: false,
      hasFenics: false,
      hasBusiv: false,
      isMarked: false,
      server: null,
    },
    canDelete: true,
  },
  userDetailPage: {
    tabIndex: 0,
    buttonPrevIsActive: true,
    buttonNextIsActive: true,
    baseInfoTab: {
      isEdit: false,
      inputValues: {},
    },
    customerTab: {
      isEdit: false,
      selectedIndex: 0,
      inputValues: {
        kids_id: -1,
        base_id: -1,
        base_name: '',
        postal_cd: '',
        address: '',
        owner: '',
        affliation: '',
        tel: '',
        fax: '',
        email: '',
        has_busiv: 0,
        has_fenics: 0,
        has_mobile: 0,
      },
    },
    licenseTab: {},
    fenicsTab: {},
    busivTab: {},
    partnerTab: {},
    historyTab: {},
    memo: {},
  },
  serverManagePage: {},
  serviceManagePage: {},
  templateManagePage: {},
  accountManagePage: {},
  data: {
    kids: [],
    baseInfo: {},
    customers: [],
    license: [],
    busivs: [],
    fenics: [],
    mobiles: [],
    partners: [],
    historys: [],
    memos: [],
    servers: [],
    services: [],
    accounts: [],
    memoTemplates: [],
    environments: [],
    events: [],
    columns: [],
  },
};

export default initState;
