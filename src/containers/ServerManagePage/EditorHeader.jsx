// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { toggleEditMode, putServers } from './actions';
import { toggleModal } from '../Common/actions';
import styles from './css/editor.css';

type PropsType = {
  isEdit: boolean,
  selection: Array<number>,
  onClickAdd: Event => void,
  onClickSave: Event => void,
  onClickDelete: Event => void,
  onClickEdit: Event => void,
  onClickCancel: Event => void,
};

function EditorHeader(props: PropsType): React.Node {
  const {
    isEdit,
    selection,
    onClickAdd,
    onClickSave,
    onClickCancel,
    onClickDelete,
    onClickEdit,
  } = props;
  return (
    <div className={styles.header}>
      {isEdit && (
        <Button
          className={styles.btn}
          variant="contained"
          onClick={onClickSave}
        >
          保存
        </Button>
      )}
      {isEdit && (
        <Button
          className={styles.btn}
          variant="contained"
          onClick={onClickCancel}
        >
          キャンセル
        </Button>
      )}

      {!isEdit && (
        <Button
          className={styles.btn}
          variant="contained"
          color="primary"
          onClick={onClickAdd}
        >
          新規追加
        </Button>
      )}

      {!isEdit && (
        <Button
          className={styles.btn}
          variant="contained"
          color="secondary"
          onClick={onClickEdit}
        >
          編集
        </Button>
      )}

      {!isEdit && (
        <Button
          className={styles.btn}
          variant="contained"
          onClick={onClickDelete}
          disabled={!(selection.length > 0)}
        >
          削除
        </Button>
      )}
    </div>
  );
}

const mapStateToProps = (state: StateType) => state;

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = (state: StateType, { dispatch }) => ({
  isEdit: state.serverManagePage.isEdit,
  selection: state.serverManagePage.selection,
  onClickAdd: () => {
    dispatch(toggleModal(true, 'create-servers'));
  },
  onClickSave: () => {
    const { rowChanges } = state.serverManagePage;
    dispatch(putServers(rowChanges));
  },
  onClickDelete: () => {
    dispatch(toggleModal(true, 'servers'));
  },
  onClickEdit: () => {
    dispatch(toggleEditMode(true));
  },
  onClickCancel: () => {
    dispatch(toggleEditMode(false));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(EditorHeader);
