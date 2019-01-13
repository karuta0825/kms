// @flow
import * as React from 'react';
import styles from '../css/tab.css';
import Buttons from './Buttons';
import FenicsTable from './FenicsTable';
import DownloadModal from './DownloadModal';

export default function TabFenics(): React.Node {
  return (
    <div className={styles.wrapper}>
      <div className={styles.action}>
        <Buttons />
      </div>
      <div className={styles.body}>
        <FenicsTable />
      </div>
      <DownloadModal />
    </div>
  );
}
