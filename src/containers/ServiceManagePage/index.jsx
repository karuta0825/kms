// @flow
import * as React from 'react';
import styles from '../TemplateManagePage/css/index.css';
import VersionList from './VersionList';
import Editor from './Editor';
import ModalDelete from './ModalDelete';

export default function ServiceManagePage(): React.Node {
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <VersionList />
      </div>
      <div className={styles.content}>
        <Editor />
      </div>
      <ModalDelete />
    </div>
  );
}
