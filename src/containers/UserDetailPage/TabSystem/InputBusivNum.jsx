// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { changeValue, addValue } from './actions';
import NumberInputWithBtn from '../../../components/NumberInputWithBtn';
import type { PropsType } from '../../../components/NumberInputWithBtn';

function InputBusivNum(props: PropsType): React.Node {
  return <NumberInputWithBtn {...props} />;
}

const mapStateToProps = state => ({
  title: 'ビジV利用端末数',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  value: state.userDetailPage.baseInfoTab.inputValues.number_pc,
  isError:
    state.userDetailPage.baseInfoTab.isInputError.number_pc,
  errMsg: '0以上の数字しか入力できません',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('number_pc', e.target.value));
  },
  onClickAdd: () => {
    dispatch(addValue('number_pc', 1));
  },
  onClickDel: () => {
    dispatch(addValue('number_pc', -1));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputBusivNum);
