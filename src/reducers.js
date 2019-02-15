// @flow
import { location, header } from './containers/Common/reducers';
import userRegisterPage from './containers/UserRegisterPage/reducers';
import userMakePage from './containers/UserMakePage/reducers';
import userListPage from './containers/UserListPage/reducers';
import userDetailPage from './containers/UserDetailPage/reducers';
import templateManage from './containers/TemplateManagePage/reducers';
import serviceManage from './containers/ServiceManagePage/reducers';
import data from './data';
import initState from './initState';

const reducers = (
  state: StateType = initState,
  action: Action
) => ({
  location: location(state.location, action),
  header: header(state.header, action),
  userRegisterPage: userRegisterPage(
    state.userRegisterPage,
    action
  ),
  userMakePage: userMakePage(state.userMakePage, action),
  userListPage: userListPage(state.userListPage, action),
  userDetailPage: userDetailPage(
    state.userDetailPage,
    action,
    state.data
  ),
  templateManagePage: templateManage(
    state.templateManagePage,
    action,
    state.data
  ),
  serviceManagePage: serviceManage(
    state.serviceManagePage,
    action
  ),
  data: data(state.data, action),
});

export default reducers;
