import * as Types from '../../../constants/ActionTypes';

export const changeValue = (key: string, value: any) => ({
  type: Types.CHANGE_PARTNER_VALUE,
  payload: { key, value },
});

export const putPartner = (
  kids_id: number,
  inputValues: PartnerType
) => ({
  type: Types.HTTP_PUT_PARTNERS,
  payload: { kids_id, inputValues },
});
