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
  title: '郵便番号',
  isEdit: state.userDetailPage.partnerTab.isEdit,
  value: state.userDetailPage.partnerTab.inputValues.se_postal_cd,
  isError: state.userDetailPage.partnerTab.isInputError.se_postal_cd,
  errMsg: '数字と-しか入力できません',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('se_postal_cd', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputEmail);
