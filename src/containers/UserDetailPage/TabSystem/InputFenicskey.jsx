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
  const reg = new RegExp(/^[a-z]+$/);

  if (value === '') {
    return {
      isError: false,
      msg: '',
    };
  }

  return {
    isError: !reg.test(value),
    msg: '半角小英字のみ可能です',
  };
}

function InputFenicskey(props: PropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = state => ({
  title: 'fenicsキー',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  value: state.userDetailPage.baseInfoTab.inputValues.fenics_key,
  inputCheck,
  customProps: { maxLength: 6 },
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
