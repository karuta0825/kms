// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
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

const mapStateToProps = state => {
  const date =
    state.userDetailPage.baseInfoTab.inputValues.register_on;
  const fmtDate =
    (date && moment(date).format('YYYY-MM-DD')) || '';
  return {
    title: '受付日',
    isEdit: state.userDetailPage.baseInfoTab.isEdit,
    value: fmtDate,
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('start_on', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputStartDate);
