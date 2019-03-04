// @flow
import * as React from 'react';
import styles from '../TemplateManagePage/css/index.css';
import VersionList from './VersionList';
import ModalDelete from './ModalDelete';
import EditorHeader from './EditorHeader';
import ServiceTable from './ServiceTable';
import ModalAdd from './ModalAdd';

export default function ServiceManagePage(): React.Node {
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <VersionList />
      </div>
      <div className={styles.content}>
        <EditorHeader />
        <ServiceTable />
      </div>
      <ModalDelete />
      <ModalAdd />
    </div>
  );
}
