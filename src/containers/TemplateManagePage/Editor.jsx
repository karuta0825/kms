// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import styles from './css/editor.css';
import EditorHeader from './EditorHeader';
import { changeValue } from './actions';

type PropsType = {
  onChange: Event => void,
  onChangeTitle: Event => void,
  inputValues: Object,
};

function Editor(props: PropsType): React.Node {
  const { inputValues, onChange, onChangeTitle } = props;
  const { title, msg } = inputValues;
  return (
    <React.Fragment>
      <div className={styles.header}>
        <EditorHeader />
      </div>
      <div className={styles.content}>
        <TextField
          id="memo-template-title"
          className={styles.title}
          label="タイトル"
          margin="normal"
          value={title}
          onChange={onChangeTitle}
        />
        <textarea
          value={inputValues.msg}
          className={styles.textarea}
          onChange={onChange}
          maxLength={500}
        />
      </div>
      <div className={styles.footer}>
        <span style={{ marginRight: '20px' }}>
          {`残り文字数:${500 - msg.length}`}
        </span>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state: StateType) => ({
  isNewMode: state.templateManagePage.isNewMode,
  inputValues: state.templateManagePage.inputValues,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('msg', e.target.value));
  },
  onChangeTitle: e => {
    dispatch(changeValue('title', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
