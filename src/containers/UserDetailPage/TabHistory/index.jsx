// @flow
import * as React from 'react';
import Buttons from './Buttons';
import HistoryTable from './HistoryTable';
import styles from '../css/tab.css';
import ModalDeleteHistory from './ModalDeleteHistory';

export default function TabHistory(): React.Node {
  return (
    <div className={styles.wrapper}>
      <div className={styles.action}>
        <Buttons />
      </div>
      <div className={styles.body}>
        <HistoryTable />
      </div>
      <ModalDeleteHistory />
    </div>
  );
}
