// @flow
import { combineReducers } from 'redux';
import { bar } from './containers/Common/reducers';
import userRegisterPage from './containers/UserRegisterPage/reducers';
import userMakePage from './containers/UserMakePage/reducers';
import userListPage from './containers/UserListPage/reducers';
import userDetailPage from './containers/UserDetailPage/reducers';
import data from './data';

const reducers = combineReducers({
  bar,
  userRegisterPage,
  userMakePage,
  userListPage,
  userDetailPage,
  data,
});

export default reducers;
