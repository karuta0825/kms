import * as React from 'react';
import { connect } from 'react-redux';
import styles from './css/index.css';
import UserInfo from './UserInfo';
import Memo from './Memo';
import { getUserInfo } from './actions';

type PropsType = {
  match: Object,
  dispatch: () => void,
};

class UserDetail extends React.Component<PropsType> {
  componentWillMount() {
    const { match, dispatch } = this.props;
    dispatch(getUserInfo(match.params.id));
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
