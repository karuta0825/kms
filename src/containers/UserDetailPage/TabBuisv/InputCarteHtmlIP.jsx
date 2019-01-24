// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../../components/TextInput';
import type { TextInputPropsType } from '../../../components/TextInput';
import { changeValue } from './actions';

function InputCarteHtmlIP(
  props: TextInputPropsType
): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = (state: StateType) => ({
  title: 'カルテHTML保存IP',
  isEdit: state.userDetailPage.busivTab.isEdit,
  value:
    state.userDetailPage.busivTab.inputValues.carte_html_save_ip,
  isError:
    state.userDetailPage.busivTab.isInputError
      .carte_html_save_ip,
  errMsg: 'IPアドレスを入力してください',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('carte_html_save_ip', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputCarteHtmlIP);
