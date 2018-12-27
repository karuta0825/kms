// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import styles from './css/index.css';
import UserInfo from './UserInfo';
import Memo from './Memo';
import { getUserInfo, toggleEditMode } from './actions';

type PropsType = {
  match: Object,
  dispatch: any => void,
};

class UserDetail extends React.Component<PropsType> {
  componentWillMount() {
    const { match, dispatch } = this.props;
    dispatch(getUserInfo(match.params.id));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(toggleEditMode(false, 'BASEINFO'));
    dispatch(toggleEditMode(false, 'CUSTOMER'));
  }

  render(): React.Node {
    return (
      <div className={styles.wrapper}>
        <UserInfo className={styles.userinfo} />
        <Memo className={styles.memo} />
      </div>
    );
  }
}

export default connect()(UserDetail);