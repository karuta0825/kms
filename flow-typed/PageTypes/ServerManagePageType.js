declare type ServerManagePageType = {
  isEdit: boolean,
  isCreateMode: boolean,
  selection: Array<number>,
  rowChanges: { [key: number]: ServerType },
  selectedProject: string,
  isOpenDeleteModal: boolean,
  inputValues: { [key: string]: string },
  isInputError: { [key: string]: boolean },
};
