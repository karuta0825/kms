// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import styles from './css/editorHeader.css';
import { toggleDeleteModal } from './actions';
import { POST_MEMO_TEMPLATE } from '../../constants/ActionTypes';

type PropsType = {
  isNewMode: boolean,
  onClickSave: Event => void,
  onClickDelete: Event => void,
  onClickUpdate: Event => void,
};

function EditorHeader(props: PropsType): React.Node {
  const {
    isNewMode,
    onClickSave,
    onClickDelete,
    onClickUpdate,
  } = props;
  return (
    <React.Fragment>
      {isNewMode && (
        <Button className={styles.btn} onClick={onClickSave}>
          保存
        </Button>
      )}
      {!isNewMode && (
        <Button className={styles.btn} onClick={onClickUpdate}>
          更新
        </Button>
      )}
      {!isNewMode && (
        <Button className={styles.btn} onClick={onClickDelete}>
          削除
        </Button>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state: StateType) => ({
  isNewMode: state.templateManagePage.isNewMode,
});

const mapDispatchToProps = dispatch => ({
  onClickSave: () => {
    dispatch({ type: POST_MEMO_TEMPLATE });
  },
  onClickDelete: () => {
    dispatch(toggleDeleteModal(true));
  },
  onClickUpdate: () => {},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorHeader);
