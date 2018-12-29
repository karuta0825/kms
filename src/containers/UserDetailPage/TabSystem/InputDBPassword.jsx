// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../../components/TextInput';
import { changeValue } from './actions';
import type { TextInputPropsType } from '../../../components/TextInput';

function InputDBPassword(props: TextInputPropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = state => ({
  title: 'DBパスワード',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  value:
    state.userDetailPage.baseInfoTab.inputValues.db_password,
  customProps: { maxLength: 10 },
  isError:
    state.userDetailPage.baseInfoTab.isInputError.db_password,
  errMsg: '半角大英字と数字しか入力できません',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('db_password', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputDBPassword);
