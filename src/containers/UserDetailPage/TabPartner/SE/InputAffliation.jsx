// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../../../components/TextInput';
import { changeValue } from '../actions';
import type { TextInputPropsType } from '../../../../components/TextInput';

function InputAffliation(props: TextInputPropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = state => ({
  title: '所属',
  isEdit: state.userDetailPage.partnerTab.isEdit,
  value: state.userDetailPage.partnerTab.inputValues.se_affliation,
  isError: false,
  errMsg: '',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('se_affliation', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputAffliation);
