// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import styles from './css/modal.css';

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

const mapStateToProps = (state: StateType) => ({});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    console.log(e.target.value);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputTitle);
