import * as Types from '../constants/ActionTypes';

export default (state: PartnerType, action: Action): PartnerType => {
  const { type, payload } = action;
  switch (type) {
    case Types.SUCCESSED_FETCH_USERINFO:
      return (payload.partner.length > 0 && payload.partner[0]) || {};
    case Types.FAILED_FETCH_USERINFO:
      return state;
    default:
      return state;
  }
};
