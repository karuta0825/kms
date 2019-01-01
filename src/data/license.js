import {
  SUCCESSED_FETCH_USERINFO,
  FAILED_FETCH_USERINFO,
} from '../constants/ActionTypes';

export default (
  state: LicenseType,
  action: Action
): LicenseType => {
  const { type, payload } = action;
  switch (type) {
    case SUCCESSED_FETCH_USERINFO: {
      const [license] = payload.license;
      return license;
    }
    case FAILED_FETCH_USERINFO:
      return state;
    default:
      return state;
  }
};
