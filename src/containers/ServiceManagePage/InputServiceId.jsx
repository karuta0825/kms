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

function InputServiceId(props: PropsType): React.Node {
  const { value, onChange } = props;
  return (
    <TextField
      id="service-id"
      label="サービスID"
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
  value: state.serviceManagePage.inputValues.service_id,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValues({ service_id: e.target.value }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputServiceId);
