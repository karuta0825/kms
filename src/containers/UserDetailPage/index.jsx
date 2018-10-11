import * as React from 'react';
import styles from './css/index.css';
import UserInfo from './UserInfo';
import Memo from './Memo';

type PropsType = {

};

class UserDetail extends React.Component<PropsType> {
  render(): React.Node {
    return (
      <div className={styles.wrapper}>
        <UserInfo className={styles.userinfo} />
        <Memo className={styles.memo} />
      </div>
    );
  }
}


export default UserDetail;
