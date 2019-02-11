// @flow
import * as React from 'react';
import styles from './css/index.css';
import TemplateList from './TemplateList';
import Editor from './Editor';
import DeleteModal from './DeleteModal';
import ReadyModal from './ReadyModal';

export default function TemplateManagePage(): React.Node {
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <TemplateList />
      </div>
      <div className={styles.content}>
        <Editor />
      </div>
      <DeleteModal />
      <ReadyModal />
    </div>
  );
}
