// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../../components/TextInput';
import type { TextInputPropsType } from '../../../components/TextInput';
import { changeValue } from './actions';

function InputAuthSrv(props: TextInputPropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = (state: StateType) => ({
  title: '認証サーバIP',
  isEdit: state.userDetailPage.busivTab.isEdit,
  value:
    state.userDetailPage.busivTab.inputValues.auth_server_ip,
  isError:
    state.userDetailPage.busivTab.isInputError.auth_server_ip,
  errMsg: 'IPアドレスを入力してください',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('auth_server_ip', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputAuthSrv);
