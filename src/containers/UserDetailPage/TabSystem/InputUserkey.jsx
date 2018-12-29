// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../../components/TextInput';
import { changeValue } from './actions';
import type { TextInputPropsType } from '../../../components/TextInput';

function InputUserkey(props: TextInputPropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = state => ({
  title: 'ユーザーキー',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  value: state.userDetailPage.baseInfoTab.inputValues.userkey,
  customProps: { maxLength: 7 },
  isError: state.userDetailPage.baseInfoTab.isInputError.userkey,
  errMsg: '半角大英字7文字まで入力可能',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('userkey', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputUserkey);
