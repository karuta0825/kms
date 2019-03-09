// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import SelectSystemType from './SelectSystemType';
import SelectVersion from './SelectVersion';
import SelectServer from './SelectServer';
import InputKid from './InputKid';
import MakeButton from './MakeButton';
import Dialog from './DialogFinish';
import styles from './css/index.css';

type PropsType = {
  showVersion: boolean,
  showKid: boolean,
  showServer: boolean,
};

const UserMake = (props: PropsType): React.Node => {
  const { showVersion, showServer, showKid } = props;
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.title}>ユーザー作成</div>
        <Paper className={styles.paper}>
          <SelectSystemType />
          {showVersion && <SelectVersion />}
          {showServer && <SelectServer />}
          {showKid && <InputKid />}
          <div className={styles.action}>
            <MakeButton />
          </div>
        </Paper>
        <Dialog />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  showVersion: state.userMakePage.showVersion,
  showServer: state.userMakePage.showServer,
  showKid: state.userMakePage.showKid,
});

export default connect(mapStateToProps)(UserMake);
