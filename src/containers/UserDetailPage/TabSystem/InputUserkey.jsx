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
  const reg = new RegExp(/^[A-Z]+$/);

  if (value === '' || value === null) {
    return {
      isError: false,
      msg: '',
    };
  }

  return {
    isError: !reg.test(value),
    msg: '半角大英字7文字まで可能です',
  };
}

function InputUserkey(props: PropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = state => ({
  title: 'ユーザーキー',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  value: state.userDetailPage.baseInfoTab.inputValues.userkey,
  inputCheck,
  customProps: { maxLength: 7 },
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('userkey', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputUserkey);
