// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../../components/TextInput';
import type { TextInputPropsType } from '../../../components/TextInput';
import { changeValue } from './actions';

function InputNetworkAddress(
  props: TextInputPropsType
): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = state => ({
  title: 'ネットワークアドレス',
  isEdit: state.userDetailPage.busivTab.isEdit,
  value: state.userDetailPage.busivTab.inputValues.w_network,
  isError: false,
  errMsg: '',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('w_network', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputNetworkAddress);
