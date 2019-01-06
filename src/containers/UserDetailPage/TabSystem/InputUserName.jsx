// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../../components/TextInput';
import { changeValue } from './actions';
import type { TextInputPropsType } from '../../../components/TextInput';

function InputUserName(props: TextInputPropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = state => ({
  title: '事業者名',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  value: state.userDetailPage.baseInfoTab.inputValues.user_name,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('user_name', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputUserName);
