// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../components/TextInput';
import type { TextInputPropsType } from '../../components/TextInput';
import { changeValue } from './actions';

function InputProject(props: TextInputPropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = state => ({
  title: 'プロジェクト名',
  isEdit: true,
  value: state.serverManagePage.inputValues.project,
  isError: false,
  errMsg: '',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('project', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputProject);
