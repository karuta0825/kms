declare type UserDetailTabFenicsType = {
  isEdit: boolean,
  inputValues: Array<FenicsType>,
  selection: Array<number>,
  rowChanges: { [number]: Object },
  isOpenDownloadModal: boolean,
  isOpenDeleteModal: boolean,
  canDownload: boolean,
  download: {
    fenics: boolean,
  },
};
