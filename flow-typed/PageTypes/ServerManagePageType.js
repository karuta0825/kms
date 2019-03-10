declare type ServerManagePageType = {
  isEdit: boolean,
  selection: Array<number>,
  rowChanges: Array<ServerType>,
  selectedProject: string,
  isOpenDeleteModal: boolean,
  inputValues: ServerType,
};
