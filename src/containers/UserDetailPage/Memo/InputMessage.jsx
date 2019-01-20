// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import { changeValue } from './actions';
import styles from './css/modal.css';

type PropsType = {
  message: string,
  onChange: Event => void,
};

function InputMessage(props: PropsType): React.Node {
  const { message, onChange } = props;
  return (
    <TextField
      id="memo-textarea"
      className={styles.message}
      multiline
      value={message}
      margin="normal"
      variant="outlined"
      onChange={onChange}
      rows="15"
      inputProps={{
        maxLength: 200,
      }}
    />
  );
}

const mapStateToProps = (state: StateType) => ({
  message: state.userDetailPage.memo.inputValues.message,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('message', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputMessage);
