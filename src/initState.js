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
    currentPage: 0,
    selections: [],
    columnFilters: [],
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
    isFetching: false,
    buttonPrevIsActive: true,
    buttonNextIsActive: true,
    baseInfoTab: {
      isEdit: false,
      inputValues: {},
      isInputError: {
        kid: false,
        user_name: false,
        kana: false,
        server: false,
        userkey: false,
        db_password: false,
        fenics_key: false,
        client_number: false,
        fenics_number: false,
        busiv_number: false,
        license: false,
        number_id: false,
        range_id: false,
        system_type: false,
        version: false,
        mobile_number: false,
        register_on: false,
        end_on: false,
      },
    },
    customerTab: {
      isEdit: false,
      selectedIndex: 0,
      isAddBaseMode: false,
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
      isInputError: {
        base_name: false,
        postal_cd: false,
        address: false,
        owner: false,
        affliation: false,
        tel: false,
        fax: false,
        email: false,
      },
    },
    licenseTab: {
      isEdit: false,
      inputValues: {},
      selectedTable: [],
      selection: [],
    },
    clientTab: {
      isEdit: false,
      inputValues: [],
      selection: [],
      rowChanges: {},
    },
    fenicsTab: {
      isEdit: false,
      inputValues: [],
      selection: [],
      rowChanges: {},
      isDonwloadOpen: false,
      canDownload: false,
      download: {
        fenics: false,
      },
    },
    busivTab: {
      isEdit: false,
      selectedIndex: 0,
      inputValues: {},
      isInputError: {},
    },
    partnerTab: {},
    historyTab: {
      selection: [],
      isOpenDeleteModal: false,
      filter: '',
    },
    memo: {
      filter: '',
      isModalOpen: false,
      isNew: false,
      inputValues: {},
      selectedTemplate: '',
    },
  },
  serverManagePage: {},
  serviceManagePage: {
    isEdit: false,
    selection: [],
    rowChanges: {},
    selectedVersion: 'LM',
    isOpenDeleteModal: false,
    isOpenNewModal: false,
    inputValues: {
      service_id: '',
      service_name: '',
      sales_id: '',
    },
  },
  templateManagePage: {
    isNewMode: true,
    selectedIndex: -1,
    isOpenDeleteModal: false,
    isOpenUpdateModal: false,
    inputValues: { title: '', msg: '' },
  },
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
