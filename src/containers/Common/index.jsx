// @flow
import * as React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Menu from './Menu';
import Header from './Header';
import styles from './css/menu.css';
import UserMake from '../UserMakePage';
import UserRegister from '../UserRegisterPage';
import UserList from '../UserListPage';
import UserDetail from '../UserDetailPage';
import Setting from '../SettingPage';
import Home from '../TopPage';
import Server from '../ServerManagePage';
import Template from '../TemplateManagePage';

export default function Frame(props): React.Node {
  return (
    <Router>
      <div className={styles.wrapper}>
        <Menu className={styles.menu} />
        <main className={styles.body}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/makeKid" component={UserMake} />
            <Route
              path="/registerKid"
              component={UserRegister}
            />
            <Route exact path="/kidList" component={UserList} />
            <Route
              path="/kidList/detail/:id"
              component={UserDetail}
            />
            <Route exact path="/setting" component={Setting} />
            <Route path="/setting/server" component={Server} />
            <Route
              path="/setting/memoTemplate"
              component={Template}
            />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
