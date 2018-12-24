declare type UserDetailPageType = {
  tabIndex: number,
  buttonPrevIsActive: boolean,
  buttonNextIsActive: boolean,
  baseInfoTab: {
    inputValues: KidType,
    isEdit: boolean,
  },
  customerTab: {
    isEdit: boolean,
    selectedIndex: number,
    inputValues: {
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
    },
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
};
