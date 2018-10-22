export type SystemType = 'onpre' | 'cloud' | 'docomo' | 'demo';
export type Version = 'LM' | 'ES';
export type NumberBool = 0 | 1;

export type KidType = {
  id: number,
  kid: string,
  user_name: string | null,
  kana: string | null,
  server: string,
  userkey: string,
  db_password: string,
  fenics_key: string,
  client_number: number,
  number_pc: number,
  license: string | null,
  number_id: number,
  range_id: string,
  update_on: Date | null,
  system_type: SystemType,
  version: Version,
  has_busiv: NumberBool,
  has_fenics: NumberBool,
  has_mobile: NumberBool,
  has_qa: NumberBool,
  mobile_number: number,
  is_marked: string,
  is_registered: NumberBool,
  register_on: Date | null,
  end_on: Date | null,
  environment_id: number,
  is_new_contract: NumberBool,
  is_replaced_from_cj: NumberBool,
  is_replaced_from_wc: NumberBool,
  is_replaced_from_another: NumberBool,
  sa_company: string | null,
  sa_name: string | null,
  sa_tel: string | null,
  sa_email: string | null,
  se_company: string | null,
  se_name: string | null,
  se_tel: string | null,
  se_email: string | null,
  em_company: string | null,
  em_name: string | null,
  em_tel: string | null,
  em_email: string | null
};

export type CustomerType = {
  kids_id: number,
  base_id: number,
  base_name: string | null,
  postal_cd: string | null,
  address: string | null,
  owner: string | null,
  affliation: string | null,
  tel: string | null,
  fax: string | null,
  email: string | null,
  has_busiv: NumberBool,
  has_fenics: NumberBool,
  has_mobile: NumberBool,
};

export type FenicsType = {
  kids_id: number,
  fenics_id: string,
  password: string,
  fenics_ip: string,
  pc_name: string,
  create_on: Date,
  start_on: Date,
  end_on: Date | null,
  category: string | null,
  is_mobile: NumberBool
};

export type BusivType = {
  information: Object
};

export type LicenseType = {
  kids_id: string,
  K1: NumberBool,
  U1: NumberBool,
  U2: NumberBool,
  U3: NumberBool,
  U4: NumberBool,
  U5: NumberBool,
  U6: NumberBool,
  U7: NumberBool,
  U8: NumberBool,
  U9: NumberBool,
  UA: NumberBool,
  UB: NumberBool,
  UC: NumberBool,
  UD: NumberBool,
  UE: NumberBool,
  UF: NumberBool,
  UG: NumberBool,
  UH: NumberBool,
  UI: NumberBool,
  C1: NumberBool,
  C2: NumberBool,
  C3: NumberBool,
  C4: NumberBool,
  S2: NumberBool,
  S3: NumberBool,
  S9: NumberBool,
  SC: NumberBool,
  SE: NumberBool,
  SH: NumberBool,
  SI: NumberBool,
  SJ: NumberBool,
  SL: NumberBool,
  SM: NumberBool,
  SO: NumberBool,
  has_sd: NumberBool,
  add_one_cli: NumberBool,
  add_ten_cli: NumberBool,
  add_twe_cli: NumberBool,
  add_one_usr: NumberBool,
  add_sd: NumberBool,
  has_busiv: NumberBool,
};

export type MobileType = {
  kids_id: string,
  base_id: number,
  admin_id: string,
  admin_pw: string,
  city_cd: string | null,
  client_number: number,
  disk_name: string | null,
  disk_size: string | null,
  fenics_key: string,
  office_cd: string | null,
};

export type EnvironmentType = {
  id: number,
  name: string,
  system_type: string,
  version: string,
  kid: string,
};

export type EventType = {
  id: number,
  date: number,
  is_finished: NumberBool,
  message: string,
  start_on: Date,
  start_on_for_view: string,
  start_time: string,
  start_time_for_view: string,
  title: string,
};

export type HistoryType = {
  id: number,
  type: string,
  content_name: string,
  item_name: string,
  before: string,
  after: string,
  create_on: Date,
  creater: string,
  msg: string,
};

export type MemoType = {
  id: number,
  kids_id: string,
  title: string,
  priority_id: number,
  priority: string,
  message: string,
  short_msg: string,
  create_on: Date,
  name: string,
};

export type MemoTemplateType = {
  id: number,
  msg: string,
  short_msg: string,
  title: string,
};

export type PartnerType = {
  kids_id: string,
  em_company: string | null,
  em_name: string | null,
  em_email: string | null,
  em_tel: string | null,
  sa_pid: string | null,
  sa_company: string | null,
  sa_postal_cd: string | null,
  sa_address: string | null,
  sa_affliation: string | null,
  sa_name: string | null,
  sa_kana: string | null,
  sa_email: string | null,
  sa_tel: string | null,
  sa_fax: string | null,
  se_pid: string | null,
  se_company: string | null,
  se_postal_cd: string | null,
  se_address: string | null,
  se_affliation: string | null,
  se_name: string | null,
  se_kana: string | null,
  se_email: string | null,
  se_tel: string | null,
  se_fax: string | null,
};

export type ServerType = {
  id: number,
  ip: string,
  name: string,
  type: string,
  version: string,
  connect_db: ?string,
  domain: ?string,
  capacity: number,
  environment_id: number,
};

export type ServiceType = {
  id: number,
  is_setup_info: number,
  sales_id: string,
  service_id: number,
  service_name: string,
  version: Version,
};
