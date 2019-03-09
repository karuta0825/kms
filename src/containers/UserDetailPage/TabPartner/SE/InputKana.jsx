// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../../../components/TextInput';
import { changeValue } from '../actions';
import type { TextInputPropsType } from '../../../../components/TextInput';

function InputKana(props: TextInputPropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = state => ({
  title: 'フリガナ',
  isEdit: state.userDetailPage.partnerTab.isEdit,
  value: state.userDetailPage.partnerTab.inputValues.se_kana,
  isError: false,
  errMsg: '',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('se_kana', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputKana);
