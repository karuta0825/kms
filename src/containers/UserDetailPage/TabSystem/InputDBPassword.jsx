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
  customProps: Object,
  inputCheck: any => { isError: boolean, msg: string },
};

function inputCheck(value): { isError: boolean, msg: string } {
  const reg = new RegExp(/^[0-9a-zA-Z]+$/);

  if (value === '') {
    return {
      isError: false,
      msg: '',
    };
  }

  return {
    isError: !reg.test(value),
    msg: '半角英数字のみ可能です',
  };
}

function InputDBPassword(props: PropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = state => ({
  title: 'DBパスワード',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  value:
    state.userDetailPage.baseInfoTab.inputValues.db_password,
  inputCheck,
  customProps: { maxLength: 10 },
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
