import * as Types from '../constants/ActionTypes';

export default (state: LicenseType, action: Action): LicenseType => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_FETCH_USERINFO: {
      const [license] = payload.license;
      return license;
    }
    case Types.FAILED_FETCH_USERINFO:
      return state;
    default:
      return state;
  }
};
