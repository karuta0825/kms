declare type UserMakePageType = {
  showVersion: boolean,
  showServer: boolean,
  showKid: boolean,
  showDialog: boolean,
  canMakeUser: boolean,
  inputValues: {
    systemType: string,
    version: string,
    server: string,
    kid: string,
  },
  makedUserKID: string,
};
