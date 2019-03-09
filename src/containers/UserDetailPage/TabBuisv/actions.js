// @flow
import * as Types from '../../../constants/ActionTypes';

export const selectBase = (index: number) => ({
  type: Types.SELECT_BUSIV_BASE_INDEX,
  payload: index,
});

export const changeValue = (key: string, value: any): Action => ({
  type: Types.CHANGE_BUSIV_VALUE,
  payload: {
    key,
    value,
  },
});

export const putBusiv = (
  kids_id: number,
  base_id: number,
  inputValues: BusivType
) => ({
  type: Types.HTTP_PUT_BUSIVS,
  payload: { kids_id, base_id, inputValues },
});
