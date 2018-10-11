// @flow

export type StateType = {
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
    canMakeUser: boolean,
    inputValues: {
      systemType: string,
      version: string,
      server: string,
      kid: string,
    },
  },
  userRegisterPage: {
    canUploadFile: boolean,
    isUploading: boolean,
  },
  userListPage: {
    isFilterOpen: boolean,
    filter: {
      keyword: ?string,
      systemType: ?string,
      version: ?string,
      hasMobile: ?string,
      hasFenics: ?string,
      hasBuisv: ?string,
      isMarked: ?string,
      server: ?string,
    },
    canDelete: boolean,
  },
  userDetailPage: {
    tabIndex: number,
    baseInfoTab: {
      inputValues: {},
      canUpdate: boolean,
      isEditing: boolean,
      canCancel: boolean,
    },
    customerTab: {
      inputValues: {},
      canUpdate: boolean,
      isEditing: boolean,
      canCancel: boolean,
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
  bar: {},
  canUploadFile: false,
  isSideBarOpen: false,
  userTab: {},
  topPage: {

  },
  userMakePage: {
    showVersion: false,
    showServer: false,
    showKid: false,
    canMakeUser: false,
    inputValues: {
      systemType: '',
      version: '',
      server: '',
      kid: '',
    },
  },
  userRegisterPage: {
    canUploadFile: false,
    isUploading: false,
  },
  userListPage: {
    isFilterOpen: false,
    filter: {
      keyword: '',
      systemType: null,
      version: null,
      hasMobile: null,
      hasFenics: null,
      hasBuisv: null,
      isMarked: null,
      server: null,
    },
    canDelete: true,
  },
  userDetailPage: {
    tabIndex: 0,
    baseInfoTab: {},
    customerTab: {},
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
    servers: [{"id":1,"ip":"192.168.100.101","name":"AP1-1","type":"AP","version":"ES","connect_db":"DB1-1","domain":null,"capacity":90,"environment_id":3},{"id":2,"ip":"192.168.100.10","name":"AP1-2","type":"AP","version":"ES","connect_db":"DB1-1","domain":null,"capacity":80,"environment_id":3},{"id":9,"ip":"192.168.100.103","name":"AP1-3","type":"AP","version":"ES","connect_db":"DB1-1","domain":null,"capacity":40,"environment_id":3},{"id":14,"ip":"192.168.110.104","name":"AP1-4","type":"AP","version":"ES","connect_db":"DB1-1","domain":null,"capacity":80,"environment_id":3},{"id":21,"ip":"192.168.110.105","name":"AP1-5","type":"AP","version":"ES","connect_db":"DB1-1","domain":null,"capacity":80,"environment_id":3},{"id":13,"ip":"192.168.100.106","name":"AP2-1","type":"AP","version":"ES","connect_db":"DB2-1","domain":null,"capacity":80,"environment_id":3},{"id":25,"ip":"192.168.110.107","name":"AP2-2","type":"AP","version":"ES","connect_db":"DB2-1","domain":null,"capacity":80,"environment_id":3},{"id":5,"ip":"192.168.100.108","name":"AP2-3","type":"AP","version":"ES","connect_db":"DB2-1","domain":null,"capacity":80,"environment_id":3},{"id":17,"ip":"192.168.100.109","name":"AP2-4","type":"AP","version":"ES","connect_db":"DB2-1","domain":null,"capacity":80,"environment_id":3},{"id":11,"ip":"192.168.100.110","name":"AP2-5","type":"AP","version":"ES","connect_db":"DB2-1","domain":null,"capacity":80,"environment_id":3},{"id":23,"ip":"192.168.100.111","name":"AP3-1","type":"AP","version":"ES","connect_db":"DB3-1","domain":null,"capacity":80,"environment_id":3},{"id":4,"ip":"192.168.100.112","name":"AP3-2","type":"AP","version":"ES","connect_db":"DB3-1","domain":null,"capacity":80,"environment_id":3},{"id":16,"ip":"192.168.110.113","name":"AP3-3","type":"AP","version":"ES","connect_db":"DB3-1","domain":null,"capacity":80,"environment_id":3},{"id":8,"ip":"192.168.100.114","name":"AP3-4","type":"AP","version":"ES","connect_db":"DB3-1","domain":null,"capacity":80,"environment_id":3},{"id":20,"ip":"192.168.110.115","name":"AP3-5","type":"AP","version":"ES","connect_db":"DB3-1","domain":null,"capacity":80,"environment_id":3},{"id":7,"ip":"192.168.100.116","name":"AP4-1","type":"AP","version":"ES","connect_db":"DB4-1","domain":null,"capacity":80,"environment_id":3},{"id":19,"ip":"192.168.110.117","name":"AP4-2","type":"AP","version":"ES","connect_db":"DB4-1","domain":null,"capacity":80,"environment_id":3},{"id":3,"ip":"192.168.100.118","name":"AP4-3","type":"AP","version":"ES","connect_db":"DB4-1","domain":null,"capacity":80,"environment_id":3},{"id":15,"ip":"192.168.110.119","name":"AP4-4","type":"AP","version":"ES","connect_db":"DB4-1","domain":null,"capacity":80,"environment_id":3},{"id":10,"ip":"192.168.100.120","name":"AP4-5","type":"AP","version":"ES","connect_db":"DB4-1","domain":null,"capacity":80,"environment_id":3},{"id":12,"ip":"192.168.100.111","name":"AP5-1","type":"AP","version":"ES","connect_db":"DB5-1","domain":null,"capacity":80,"environment_id":3},{"id":22,"ip":"192.168.110.109","name":"AP5-2","type":"AP","version":"ES","connect_db":"DB5-1","domain":null,"capacity":80,"environment_id":3},{"id":24,"ip":"192.168.110.111","name":"AP5-3","type":"AP","version":"ES","connect_db":"DB5-1","domain":null,"capacity":80,"environment_id":3},{"id":6,"ip":"192.168.100.105","name":"AP5-4","type":"AP","version":"ES","connect_db":"DB5-1","domain":null,"capacity":80,"environment_id":3},{"id":18,"ip":"192.168.110.105","name":"AP5-5","type":"AP","version":"ES","connect_db":"DB5-1","domain":null,"capacity":80,"environment_id":3},{"id":26,"ip":"192.168.150.101","name":"DB1-1","type":"DB","version":"ES","connect_db":"","domain":null,"capacity":200,"environment_id":3},{"id":29,"ip":"192.168.150.104","name":"DB2-1","type":"DB","version":"ES","connect_db":"","domain":null,"capacity":200,"environment_id":3},{"id":28,"ip":"192.168.150.103","name":"DB3-1","type":"DB","version":"ES","connect_db":"","domain":null,"capacity":200,"environment_id":3},{"id":27,"ip":"192.168.150.102","name":"DB4-1","type":"DB","version":"ES","connect_db":"","domain":null,"capacity":200,"environment_id":3},{"id":30,"ip":"192.168.150.105","name":"DB5-1","type":"DB","version":"ES","connect_db":"","domain":null,"capacity":200,"environment_id":3},{"id":60,"ip":"192.158.10.10","name":"LAP1-1","type":"AP","version":"LM","connect_db":"LDB1-1","domain":"WINCARE1","capacity":60,"environment_id":4},{"id":38,"ip":"192.168.200.108","name":"LAP1-2","type":"AP","version":"LM","connect_db":"LDB1-1","domain":"WINCARE1","capacity":40,"environment_id":4},{"id":43,"ip":"192.168.210.101","name":"LAP1-3","type":"AP","version":"LM","connect_db":"LDB1-1","domain":"WINCARE1","capacity":10,"environment_id":4},{"id":50,"ip":"192.168.210.108","name":"LAP1-4","type":"AP","version":"LM","connect_db":"LDB1-1","domain":"WINCARE1","capacity":40,"environment_id":4},{"id":42,"ip":"192.168.200.112","name":"LAP1-5","type":"AP","version":"LM","connect_db":"LDB1-1","domain":"WINCARE1","capacity":80,"environment_id":4},{"id":54,"ip":"192.168.210.112","name":"LAP2-1","type":"AP","version":"LM","connect_db":"LDB2-1","domain":"WINCARE2","capacity":30,"environment_id":4},{"id":34,"ip":"192.168.200.104","name":"LAP2-2","type":"AP","version":"LM","connect_db":"LDB2-1","domain":"WINCARE2","capacity":80,"environment_id":4},{"id":46,"ip":"192.168.210.104","name":"LAP2-3","type":"AP","version":"LM","connect_db":"LDB2-1","domain":"WINCARE2","capacity":80,"environment_id":4},{"id":40,"ip":"192.168.200.110","name":"LAP2-4","type":"AP","version":"LM","connect_db":"LDB2-1","domain":"WINCARE2","capacity":80,"environment_id":4},{"id":64,"ip":"192.156.11.11","name":"WEB0-1","type":"WEB","version":"ES","connect_db":"","domain":null,"capacity":400,"environment_id":3}],
    services: [],
    accounts: [],
    memoTemplates: [],
    environments: [{"id":1,"name":"オンプレ","system_type":"onpre","version":"ES","kid":"50000"},{"id":2,"name":"オンプレ","system_type":"onpre","version":"LM","kid":"51000"},{"id":3,"name":"クラウド","system_type":"cloud","version":"ES","kid":"52000"},{"id":4,"name":"クラウド","system_type":"cloud","version":"LM","kid":"53000"},{"id":5,"name":"デモ","system_type":"demo","version":"LM","kid":"54000"},{"id":6,"name":"ドコモ","system_type":"docomo","version":"LM","kid":"00001"},{"id":7,"name":"テスト","system_type":"test","version":"LM","kid":"99999"}],
    events: [],
    columns: [],
  },
};

export default initState;
