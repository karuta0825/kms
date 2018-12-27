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

function InputAddress(props: PropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = state => ({
  title: '住所',
  isEdit: state.userDetailPage.customerTab.isEdit,
  value: state.userDetailPage.customerTab.inputValues.address,
  isError: false,
  errMsg: '',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('address', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputAddress);
