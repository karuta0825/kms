// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../../../components/TextInput';
import { changeValue } from '../actions';
import type { TextInputPropsType } from '../../../../components/TextInput';

function InputFax(props: TextInputPropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = state => ({
  title: 'Fax',
  isEdit: state.userDetailPage.partnerTab.isEdit,
  value: state.userDetailPage.partnerTab.inputValues.se_fax,
  isError: state.userDetailPage.partnerTab.isInputError.se_fax,
  errMsg: '数字と-しか入力できません',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('se_fax', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFax);
