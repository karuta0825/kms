// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { changeValue } from './actions';
import InputDate from '../../../components/InputDate';

type PropsType = {
  title: string,
  isEdit: boolean,
  value: string,
  onChange: Event => void,
};

function InputStartDate(props: PropsType): React.Node {
  return <InputDate {...props} />;
}

const mapStateToProps = state => ({
  title: '受付日',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  value:
    state.userDetailPage.baseInfoTab.inputValues.register_on,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('start_on', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputStartDate);
