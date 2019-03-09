// @flow
import * as React from 'react';
import styles from '../css/tab.css';
import Buttons from './Buttons';
import SA from './SA';
import SE from './SE';
import EM from './EM';

export default function TabPartner(): React.Node {
  return (
    <div className={styles.wrapper}>
      <div className={styles.action}>
        <Buttons />
      </div>
      <div className={styles.body}>
        <SA />
        <SE />
        <EM />
      </div>
    </div>
  );
}
