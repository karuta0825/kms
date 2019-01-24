// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../../components/TextInput';
import type { TextInputPropsType } from '../../../components/TextInput';
import { changeValue } from './actions';

function InputVirtualDownloadSrvIP(
  props: TextInputPropsType
): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = (state: StateType) => ({
  title: '仮想ダウンロードIP',
  isEdit: state.userDetailPage.busivTab.isEdit,
  value: state.userDetailPage.busivTab.inputValues.virtual_dl_ip,
  isError:
    state.userDetailPage.busivTab.isInputError.virtual_dl_ip,
  errMsg: 'IPアドレスを入力してください',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('virtual_dl_ip', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputVirtualDownloadSrvIP);
