// @flow

export type StateType = {
  location: string,
  header: {
    title: string,
  },
  topPage: {
    news: {},
    accomadate: {},
    todos: {},
    graph: {},
  },
  userMakePage: {
    showVersion: boolean,
    showServer: boolean,
    showKid: boolean,
    showDialog: boolean,
    canMakeUser: boolean,
    inputValues: {
      systemType: string,
      version: string,
      server: string,
      kid: string,
    },
    makedUserKID: string,
  },
  userRegisterPage: {
    canUploadFile: boolean,
    isUploading: boolean,
  },
  userListPage: {
    isFilterOpen: boolean,
    filter: {
      keyword: ?string,
      isOnpre: boolean,
      isCloud: boolean,
      isDemo: boolean,
      isKensyo: boolean,
      isES: boolean,
      isLM: boolean,
      hasMobile: boolean,
      hasFenics: boolean,
      hasBuisv: boolean,
      isMarked: boolean,
      server: ?string,
    },
    canDelete: boolean,
  },
  userDetailPage: {
    tabIndex: number,
    baseInfoTab: {
      inputValues: {},
      isEdit: boolean,
    },
    customerTab: {
      inputValues: {
        address: string,
      },
      isEdit: boolean,
    },
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
  },
  serverManagePage: {},
  serviceManagePage: {},
  templateManagePage: {},
  partnerListPage: {},
  fenicsListPage: {},
  accountManagePage: {},
  data: {
    kids: Array<any>,
    customers: Array<any>,
    fenics: Array<any>,
    busivs: Array<any>,
    mobiles: Array<any>,
    partners: Array<any>,
    historys: Array<any>,
    servers: Array<any>,
    services: Array<any>,
  }
};


const initState: StateType = {
  location: 'home',
  header: {
    title: 'ホーム',
  },
  topPage: {

  },
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
    baseInfoTab: {
      isEdit: false,
      inputValues: {

      },
    },
    customerTab: {
      isEdit: false,
      inputValues: {
        addresss: '',
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
