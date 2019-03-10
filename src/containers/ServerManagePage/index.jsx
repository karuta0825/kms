// @flow
import * as React from 'react';
import styles from './css/index.css';
import ProjectList from './ProjectList';
import ModalDeleteServer from './ModalDeleteServer';
import EditorHeader from './EditorHeader';
import ServersTable from './ServersTable';

export default function ServiceManagePage(): React.Node {
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <ProjectList />
      </div>
      <div className={styles.content}>
        <EditorHeader />
        <ServersTable />
      </div>
      <ModalDeleteServer />
    </div>
  );
}
