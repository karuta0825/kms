// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../components/TextInput';
import type { TextInputPropsType } from '../../components/TextInput';
import { changeValue } from './actions';

function InputIP(props: TextInputPropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = (state: StateType) => ({
  title: 'IPアドレス',
  isEdit: true,
  value: state.serverManagePage.inputValues.ip,
  isError: state.serverManagePage.isInputError.ip,
  errMsg: 'IPアドレスを入力してください',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('ip', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputIP);
