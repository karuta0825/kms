declare type UserMakePageType = {
  showVersion: boolean,
  showServer: boolean,
  showKid: boolean,
  showDialog: boolean,
  canMakeUser: boolean,
  inputValues: {
    system_type: string,
    version: string,
    server: string,
    kid: string,
  },
  makedUserKID: string,
};
