declare type ServiceManagePageType = {
  isEdit: boolean,
  selection: Array<number>,
  rowChanges: Array<ServiceType>,
  selectedVersion: Version,
  isOpenDeleteModal: boolean,
  isOpenNewModal: boolean,
  inputValues: {
    service_id: string,
    service_name: string,
    sales_id: string,
  },
};
