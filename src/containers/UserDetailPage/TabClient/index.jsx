// @flow
import * as React from 'react';
import styles from '../css/tab.css';
import Buttons from './Buttons';
import ClientTable from './ClientTable';
import ModalDeleteClients from './ModalDeleteClients';

export default function TabClient(): React.Node {
  return (
    <div className={styles.wrapper}>
      <div className={styles.action}>
        <Buttons />
      </div>
      <div className={styles.body}>
        <ClientTable />
      </div>
      <ModalDeleteClients />
    </div>
  );
}
