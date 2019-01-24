// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../../components/TextInput';
import type { TextInputPropsType } from '../../../components/TextInput';
import { changeValue } from './actions';

function InputSubnet(props: TextInputPropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = (state: StateType) => ({
  title: 'サブネットマスク',
  isEdit: state.userDetailPage.busivTab.isEdit,
  value: state.userDetailPage.busivTab.inputValues.w_subnet,
  isError: state.userDetailPage.busivTab.isInputError.w_subnet,
  errMsg: 'IPアドレスを入力してください',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('w_subnet', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputSubnet);
