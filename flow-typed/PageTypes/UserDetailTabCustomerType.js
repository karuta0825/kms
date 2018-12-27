declare type UserDetailTabCustomerType = {
  selectedIndex: number,
  inputValues: CustomerType,
  isInputError: {
    base_name: boolean,
    postal_cd: boolean,
    address: boolean,
    owner: boolean,
    affliation: boolean,
    tel: boolean,
    fax: boolean,
    email: boolean,
  },
};
