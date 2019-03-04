// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import UpdateIcon from '@material-ui/icons/Loop';

import styles from './css/editorHeader.css';
import { toggleDeleteModal } from './actions';
import {
  POST_MEMO_TEMPLATE,
  PUT_MEMO_TEMPLATE,
} from '../../constants/ActionTypes';

type PropsType = {
  isNewMode: boolean,
  onClickSave: Event => void,
  onClickDelete: Event => void,
  onClickUpdate: Event => void,
};

const IconStyle = (isWhite: boolean) => ({
  fontSize: '20px',
  marginRight: '5px',
  color: isWhite ? 'white' : 'rgba(0, 0, 0, 0.54)',
});

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
        <Button
          variant="contained"
          className={styles.btn}
          onClick={onClickSave}
        >
          <SaveIcon style={IconStyle(false)} />
          保存
        </Button>
      )}
      {!isNewMode && (
        <Button
          variant="contained"
          className={styles.btn}
          onClick={onClickUpdate}
          color="primary"
        >
          <UpdateIcon style={IconStyle(true)} />
          更新
        </Button>
      )}
      {!isNewMode && (
        <Button
          variant="contained"
          className={styles.btn}
          onClick={onClickDelete}
          color="secondary"
        >
          <DeleteIcon style={IconStyle(true)} />
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
  onClickUpdate: () => {
    dispatch({ type: PUT_MEMO_TEMPLATE });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorHeader);
