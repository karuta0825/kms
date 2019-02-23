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

const fmtDate = (date: string | null): string =>
  (date && moment(date).format('YYYY-MM-DD')) || '';

function InputStartDate(props: PropsType): React.Node {
  return <InputDate {...props} />;
}

const mapStateToProps = (state: StateType) => ({
  title: '解約日',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  value: fmtDate(
    state.userDetailPage.baseInfoTab.inputValues.end_on
  ),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('end_on', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputStartDate);
