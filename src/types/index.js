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

};

export type MobileType = {

};

export type EnvironmentType = {

};

export type EventType = {

};

export type HistoryType = {

};

export type MemoType = {

};

export type MemoTemplateType = {

};

export type PartnerType = {

};

export type ServerType = {

};

export type ServiceType = {

};

