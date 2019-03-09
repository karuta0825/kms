// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../../../components/TextInput';
import { changeValue } from '../actions';
import type { TextInputPropsType } from '../../../../components/TextInput';

function InputEmail(props: TextInputPropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = state => ({
  title: '電話番号',
  isEdit: state.userDetailPage.partnerTab.isEdit,
  value: state.userDetailPage.partnerTab.inputValues.em_tel,
  isError: state.userDetailPage.partnerTab.isInputError.em_tel,
  errMsg: '数字と-しか入力できません',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('em_tel', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputEmail);
