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

function InputSalesId(props: PropsType): React.Node {
  const { value, onChange } = props;
  return (
    <TextField
      id="sales-id"
      label="型番"
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
  value: state.serviceManagePage.inputValues.sales_id,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValues({ sales_id: e.target.value }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputSalesId);
