// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../components/TextInput';
import type { TextInputPropsType } from '../../components/TextInput';
import { changeValue } from './actions';

function InputName(props: TextInputPropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = state => ({
  title: 'サーバ名',
  isEdit: true,
  value: state.serverManagePage.inputValues.name,
  isError: state.serverManagePage.isInputError.name,
  errMsg: '必須入力項目です',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('name', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputName);
