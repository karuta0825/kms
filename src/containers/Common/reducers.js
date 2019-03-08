// @flow
import * as Types from '../../constants/ActionTypes';
import initState from '../../initState';

export const location = (state = initState.location, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.CHANGE_LOCATION:
      return payload;
    default:
      return state;
  }
};

export const header = (
  state: { title: string },
  action: Action
): { title: string } => {
  const { type, payload } = action;
  switch (type) {
    case Types.CHANGE_MENU_TITLE:
      return { title: payload };
    case Types.SUCCESSED_FETCH_USERINFO: {
      const { kid, user_name } = payload.baseInfo[0];
      return { title: `${kid} ${user_name}` };
    }
    default:
      return state;
  }
};

export const dialog = (
  state: { title: string, isOpen: boolean, msg: string },
  action: Action
): { title: string, isOpen: boolean, msg: string } => {
  const { type, payload } = action;
  switch (type) {
    case Types.TOGGLE_MODAL:
      if (payload.name === 'dialog') {
        return {
          ...state,
          isOpen: payload.isOpen,
        };
      }
      return state;
    case Types.FAILED_HTTP_DELETE:
      return {
        title: 'データ削除処理の失敗',
        isOpen: true,
        msg: payload,
      };
    case Types.FAILED_HTTP_GET:
      return {
        title: 'データ取得処理の失敗',
        isOpen: true,
        msg: payload,
      };
    case Types.FAILED_HTTP_PUT:
      return {
        title: 'データ更新処理の失敗',
        isOpen: true,
        msg: payload,
      };
    case Types.FAILED_HTTP_POST:
      return {
        title: 'データ作成処理の失敗',
        isOpen: true,
        msg: payload,
      };
    default:
      return state;
  }
};
