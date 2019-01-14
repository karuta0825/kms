// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../../components/TextInput';
import type { TextInputPropsType } from '../../../components/TextInput';
import { changeValue } from './actions';

function InputRouter(props: TextInputPropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = state => ({
  title: 'ルータアドレス',
  isEdit: state.userDetailPage.busivTab.isEdit,
  value: state.userDetailPage.busivTab.inputValues.w_router,
  isError: false,
  errMsg: '',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('w_router', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputRouter);
