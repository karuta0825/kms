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

function InputPostal(props: PropsType): React.Node {
  return <TextInput title="郵便番号" {...props} />;
}

const mapStateToProps = state => ({
  isEdit: state.userDetailPage.customerTab.isEdit,
  value: state.userDetailPage.customerTab.inputValues.postal_cd,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('postal_cd', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputPostal);
