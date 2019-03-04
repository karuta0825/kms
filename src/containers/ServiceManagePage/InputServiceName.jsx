// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import { changeValues } from './actions';
import styles from './css/modal.css';

type PropsType = {
  value: ?string,
  onChange: Event => void,
};

function InputServiceName(props: PropsType): React.Node {
  const { value, onChange } = props;
  return (
    <TextField
      id="service-name"
      label="サービス名"
      className={styles.input}
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
  value: state.serviceManagePage.inputValues.service_name,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValues({ service_name: e.target.value }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputServiceName);
