// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { changeValue, addValue } from './actions';
import NumberInputWithBtn from '../../../components/NumberInputWithBtn';
import type { PropsType } from '../../../components/NumberInputWithBtn';

function InputFenicsNum(props: PropsType): React.Node {
  return <NumberInputWithBtn {...props} />;
}

const mapStateToProps = (state: StateType) => ({
  title: 'Fenics利用端末数',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  value: String(
    state.userDetailPage.baseInfoTab.inputValues.fenics_number
  ),
  isError:
    state.userDetailPage.baseInfoTab.isInputError.fenics_number,
  errMsg: '削減できません。クライアントタブから行ってください',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('fenics_number', e.target.value));
  },
  onClickAdd: () => {
    dispatch(addValue('fenics_number', 1));
  },
  onClickDel: () => {
    dispatch(addValue('fenics_number', -1));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFenicsNum);
