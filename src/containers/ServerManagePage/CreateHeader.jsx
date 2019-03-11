// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { toggleCreateMode, postServers } from './actions';
import styles from './css/editor.css';

type PropsType = {
  isInputError: { [key: string]: boolean },
  onClickSave: Event => void,
  onClickCancel: Event => void,
};

function CreateHeader(props: PropsType): React.Node {
  const { isInputError, onClickSave, onClickCancel } = props;
  return (
    <div className={styles.header}>
      <Button
        className={styles.btn}
        variant="contained"
        onClick={onClickSave}
        disabled={Object.values(isInputError).some(v => v === true)}
      >
        保存
      </Button>
      <Button
        className={styles.btn}
        variant="contained"
        onClick={onClickCancel}
      >
        キャンセル
      </Button>
    </div>
  );
}

const mapStateToProps = (state: StateType) => state;

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = (state: StateType, { dispatch }) => ({
  isInputError: state.serverManagePage.isInputError,
  onClickSave: () => {
    const { inputValues } = state.serverManagePage;
    dispatch(postServers(inputValues));
  },
  onClickCancel: () => {
    dispatch(toggleCreateMode(false));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CreateHeader);
