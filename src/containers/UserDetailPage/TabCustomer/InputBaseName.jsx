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

function InputBaseName(props: PropsType): React.Node {
  return <TextInput title="拠点名" {...props} />;
}

const mapStateToProps = state => ({
  isEdit: state.userDetailPage.customerTab.isEdit,
  value: state.userDetailPage.customerTab.inputValues.base_name,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('base_name', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputBaseName);
