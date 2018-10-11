// @flow
import {
  POST_REGISTER_USER,
  READY_FOR_UPLOAD,
} from '../../constants/ActionTypes';

export const registerUser = (values: any) => ({
  type: POST_REGISTER_USER,
  payload: values,
});

export const canUpload = (value: boolean) => ({
  type: READY_FOR_UPLOAD,
  payload: !value,
});
