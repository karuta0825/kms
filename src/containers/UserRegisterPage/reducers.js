// @flow
import {
  READY_FOR_UPLOAD,
  POST_REGISTER_USER,
  SUCCESSED_REGISTER_USER,
} from '../../constants/ActionTypes';
import initState from '../../initState';

const { userRegisterPage } = initState;

type Action = {
  type: string,
  payload: any,
};

const canUploadFile = (state = false, action): boolean => {
  const { type, payload } = action;
  switch (type) {
    case READY_FOR_UPLOAD:
      return !payload;
    case POST_REGISTER_USER:
      return false;
    default:
      return state;
  }
};

const isUploading = (state = false, action): boolean => {
  const { type, payload } = action;
  switch (type) {
    case POST_REGISTER_USER:
      return true;
    case SUCCESSED_REGISTER_USER:
      return false;
    default:
      return state;
  }
};

export default (state = userRegisterPage, action: Action) => ({
  canUploadFile: canUploadFile(state.canUploadFile, action),
  isUploading: isUploading(state.isUploading, action),
});
