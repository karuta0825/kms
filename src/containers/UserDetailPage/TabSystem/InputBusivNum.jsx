// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { changeValue, addValue } from './actions';
import NumberInputWithBtn from '../../../components/NumberInputWithBtn';
import type { PropsType } from '../../../components/NumberInputWithBtn';

function InputBusivNum(props: PropsType): React.Node {
  return <NumberInputWithBtn {...props} />;
}

const mapStateToProps = (state: StateType) => ({
  title: 'ビジV利用端末数',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  value: String(
    state.userDetailPage.baseInfoTab.inputValues.busiv_number
  ),
  isError:
    state.userDetailPage.baseInfoTab.isInputError.busiv_number,
  errMsg: '0以上の数字しか入力できません',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('busiv_number', e.target.value));
  },
  onClickAdd: () => {
    dispatch(addValue('busiv_number', 1));
  },
  onClickDel: () => {
    dispatch(addValue('busiv_number', -1));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputBusivNum);
