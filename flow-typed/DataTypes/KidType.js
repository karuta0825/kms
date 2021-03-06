declare type KidType = {
  id: number,
  kid: string,
  user_name: string | null,
  kana: string | null,
  server: string,
  dbserver: string,
  userkey: string,
  db_password: string,
  fenics_key: string,
  client_number: number,
  fenics_number: number,
  busiv_number: number,
  license: string | null,
  number_id: number,
  range_id: string,
  update_on: string | null,
  system_type: SystemType,
  version: Version,
  has_busiv: NumberBool,
  has_fenics: NumberBool,
  has_mobile: NumberBool,
  has_qa: NumberBool,
  mobile_number: number,
  is_marked: string,
  is_registered: NumberBool,
  register_on: string | null,
  end_on: string | null,
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
  em_email: string | null,
};
