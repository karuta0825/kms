// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Buttons from './Buttons';
import BaseList from './BaseList';
import styles from './css/index.css';
import frameStyles from '../css/tab.css';
import LMInfo from './LMInfo';
import ESInfo from './ESInfo';

type PropsType = {
  version: string,
};

function TabBusiv(props: PropsType): React.Node {
  const { version } = props;
  return (
    <div className={styles.container}>
      <BaseList />
      <div className={styles.detail}>
        <div className={frameStyles.action}>
          <Buttons />
        </div>
        <div className={frameStyles.body}>
          {version === 'LM' && <LMInfo />}
          {version === 'ES' && <ESInfo />}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: StateType) => ({
  version: state.data.baseInfo.version,
});

export default connect(mapStateToProps)(TabBusiv);
