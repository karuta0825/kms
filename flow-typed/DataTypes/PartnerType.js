declare type PartnerType = {
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

declare type PartnerType2 = {
  pid: number,
  name: string,
  postal_cd: string,
  address: string,
};

declare type KidsStaffsSType = {
  kid_id: number,
  hid: number,
};

declare type WorkType = 'SE' | 'SA' | 'OTHER';

declare type StaffType = {
  hid: number,
  pid: number,
  affliation: string,
  name: string,
  kana: string,
  type: WorkType,
  email: string,
  tel: string,
  fax: string,
  star: NumberBool,
};

/**
 * 最終的にはどのようなデータがほしいんだろうか?
 */

const ary = [
  {
    kids_id: 1,
    hid: 1,
    company: '',
    postal_cd: '',
    type: 'SE',
    affliation: '',
    name: '',
    kana: '',
    email: '',
    tel: '',
    fax: '',
  },
];
