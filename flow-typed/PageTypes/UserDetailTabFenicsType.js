declare type UserDetailTabFenicsType = {
  isEdit: boolean,
  inputValues: Array<FenicsType>,
  selection: Array<number>,
  rowChanges: { [number]: Object },
  isDownloadOpen: boolean,
  canDownload: boolean,
  download: {
    fenics: boolean,
  },
};
