// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import styles from './css/modal.css';
import { changeValue } from './actions';

type PropsType = {
  value: ?string,
  onChange: Event => void,
};

function InputTitle(props: PropsType): React.Node {
  const { value, onChange } = props;
  return (
    <TextField
      id="memo-title"
      className={styles.title}
      label="タイトル"
      margin="normal"
      value={value}
      InputLabelProps={{
        shrink: true,
      }}
      onChange={onChange}
    />
  );
}

const mapStateToProps = (state: StateType) => ({
  value: state.userDetailPage.memo.inputValues.title,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('title', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputTitle);
