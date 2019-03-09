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
  title: 'Email',
  isEdit: state.userDetailPage.partnerTab.isEdit,
  value: state.userDetailPage.partnerTab.inputValues.sa_email,
  isError: state.userDetailPage.partnerTab.isInputError.sa_email,
  errMsg: '0-9,a-z,A-Z,@,.しか使えないよ',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('sa_email', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputEmail);
