// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../../../components/TextInput';
import { changeValue } from '../actions';
import type { TextInputPropsType } from '../../../../components/TextInput';

function InputAddress(props: TextInputPropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = state => ({
  title: '名前',
  isEdit: state.userDetailPage.partnerTab.isEdit,
  value: state.userDetailPage.partnerTab.inputValues.sa_name,
  isError: false,
  errMsg: '',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('sa_name', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputAddress);
