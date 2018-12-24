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
  inputCheck: any => { isError: boolean, msg: string },
};

function inputCheck(value): { isError: boolean, msg: string } {
  const reg = new RegExp(/^[0-9a-zA-Z-_@\.]+$/);

  if (value === '') {
    return {
      isError: false,
      msg: '',
    };
  }

  return {
    isError: !reg.test(value),
    msg: '0-9,a-z,A-Z,@,.しか使えないよ',
  };
}

function InputEmail(props: PropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = state => ({
  title: 'Email',
  isEdit: state.userDetailPage.customerTab.isEdit,
  value: state.userDetailPage.customerTab.inputValues.email,
  inputCheck,
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
