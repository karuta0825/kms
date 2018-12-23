// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../../components/TextInput';
import { changeValue } from './actions';

type PropsType = {
  isEdit: boolean,
  value: string,
  onChange: Event => void,
};

function InputTel(props: PropsType): React.Node {
  return <TextInput title="電話番号" {...props} />;
}

const mapStateToProps = state => ({
  isEdit: state.userDetailPage.customerTab.isEdit,
  value: state.userDetailPage.customerTab.inputValues.tel,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('tel', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputTel);
