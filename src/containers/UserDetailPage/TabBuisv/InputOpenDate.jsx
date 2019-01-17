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

function InputOpenDate(props: PropsType): React.Node {
  return <InputDate {...props} />;
}

const mapStateToProps = (
  state: StateType
): { title: string, isEdit: boolean, value: string } => {
  const date =
    state.userDetailPage.busivTab.inputValues.open_date;
  const fmtDate =
    (date && moment(date).format('YYYY-MM-DD')) || '';
  return {
    title: '開通希望日',
    isEdit: state.userDetailPage.busivTab.isEdit,
    value: fmtDate,
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('open_date', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputOpenDate);
