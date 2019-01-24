// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../../components/TextInput';
import type { TextInputPropsType } from '../../../components/TextInput';
import { changeValue } from './actions';

function InputDownloadSrv(
  props: TextInputPropsType
): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = (state: StateType) => ({
  title: 'ダウンロードサーバIP',
  isEdit: state.userDetailPage.busivTab.isEdit,
  value:
    state.userDetailPage.busivTab.inputValues.download_server_ip,
  isError:
    state.userDetailPage.busivTab.isInputError
      .download_server_ip,
  errMsg: 'IPアドレスを入力してください',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('download_server_ip', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputDownloadSrv);
