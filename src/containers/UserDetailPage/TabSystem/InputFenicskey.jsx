// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../../components/TextInput';
import { changeValue } from './actions';
import type { TextInputPropsType } from '../../../components/TextInput';

function InputFenicskey(props: TextInputPropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = state => ({
  title: 'fenicsキー',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  value: state.userDetailPage.baseInfoTab.inputValues.fenics_key,
  isError:
    state.userDetailPage.baseInfoTab.isInputError.fenics_key,
  customProps: { maxLength: 6 },
  errMsg: '半角小英と数字しか入力できません',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('fenics_key', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFenicskey);
