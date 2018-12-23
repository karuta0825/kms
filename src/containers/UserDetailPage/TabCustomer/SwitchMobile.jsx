// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import SwitchControl from '../../../components/SwitchControl';
import { changeValue } from './actions';

function SwitchMobile(props): React.Node {
  return <SwitchControl {...props} />;
}

const mapStateToProps = state => ({
  title: 'モバイル',
  isEdit: state.userDetailPage.customerTab.isEdit,
  isChecked:
    state.userDetailPage.customerTab.inputValues.has_mobile ===
    1,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    const value = e.target.checked ? 1 : 0;
    dispatch(changeValue('has_mobile', value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwitchMobile);
