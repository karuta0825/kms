import * as Types from '../../../constants/ActionTypes';

export const cancelEdit = (name: string) => ({
  type: Types.EDIT_CANCEL,
  payload: name,
});

export const changeValue = (key: string, value: any) => ({
  type: Types.CHANGE_CUSTOMER_VALUE,
  payload: {
    key,
    value,
  },
});

export const selectBase = (index: number) => ({
  type: Types.SELECT_BASE_INDEX,
  payload: index,
});

export const toggleNewAddMode = (isNewMode: boolean) => ({
  type: Types.CHANGE_NEWBASE_MODE,
  payload: isNewMode,
});

export const putCustomer = (kids_id, base_id, inputValues) => ({
  type: Types.HTTP_PUT_CUSTOMERS,
  payload: { kids_id, base_id, inputValues },
});

export const postCustomer = (
  kids_id: number,
  inputValues: CustomerType
) => ({
  type: Types.HTTP_POST_CUSTOMERS,
  payload: { kids_id, inputValues },
});
