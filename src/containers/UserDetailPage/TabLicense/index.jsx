// @flow
import * as React from 'react';
import styles from '../css/tab.css';
import LicenseTable from './LicenseTable';
import Buttons from './Buttons';

export default function TabLicense(): React.Node {
  return (
    <div className={styles.wrapper}>
      <div className={styles.action}>
        <Buttons />
      </div>
      <div className={styles.body}>
        <LicenseTable />
      </div>
    </div>
  );
}
