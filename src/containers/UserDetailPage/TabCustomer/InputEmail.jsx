// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../../components/TextInput';
import { changeValue } from './actions';

type PropsType = {
  title: string,
  isEdit: boolean,
  value: string,
  onChange: Event => void,
  isError: boolean,
  errMsg: string,
};

function InputEmail(props: PropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = state => ({
  title: 'Email',
  isEdit: state.userDetailPage.customerTab.isEdit,
  value: state.userDetailPage.customerTab.inputValues.email,
  isError: state.userDetailPage.customerTab.isInputError.email,
  errMsg: '0-9,a-z,A-Z,@,.しか使えないよ',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('email', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputEmail);
