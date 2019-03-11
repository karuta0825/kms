// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import styles from './css/index.css';
import ProjectList from './ProjectList';
import ModalDeleteServer from './ModalDeleteServer';
import EditorHeader from './EditorHeader';
import ServersTable from './ServersTable';
import CreateView from './CreateView';
import CreateHeader from './CreateHeader';

type PropsType = {
  isCreateMode: boolean,
};

function ServerManagePage(props: PropsType): React.Node {
  const { isCreateMode } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <ProjectList />
      </div>
      <div className={styles.content}>
        {isCreateMode && <CreateHeader />}
        {isCreateMode && <CreateView />}
        {!isCreateMode && <EditorHeader />}
        {!isCreateMode && <ServersTable />}
      </div>
      <ModalDeleteServer />
    </div>
  );
}

const mapStateToProps = (state: StateType) => ({
  isCreateMode: state.serverManagePage.isCreateMode,
});

export default connect(mapStateToProps)(ServerManagePage);
