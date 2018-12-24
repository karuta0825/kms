// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import SwitchControl from '../../../components/SwitchControl';
import { changeValue } from './actions';

function SwitchQA(props): React.Node {
  return <SwitchControl {...props} />;
}

const mapStateToProps = state => ({
  title: '業務QA',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  isChecked:
    state.userDetailPage.baseInfoTab.inputValues.has_qa === 1,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    const value = e.target.checked ? 1 : 0;
    dispatch(changeValue('has_qa', value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwitchQA);
