// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { changeValue, addValue } from './actions';
import NumberInputWithBtn from '../../../components/NumberInputWithBtn';
import type { PropsType } from '../../../components/NumberInputWithBtn';

function InputClientNum(props: PropsType): React.Node {
  return <NumberInputWithBtn {...props} />;
}

const mapStateToProps = state => ({
  title: 'クライアント数(Citrix)',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  value:
    state.userDetailPage.baseInfoTab.inputValues.client_number,
  isError:
    state.userDetailPage.baseInfoTab.isInputError.client_number,
  errMsg: '削減できません。クライアントタブから行ってください',
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('client_number', e.target.value));
  },
  onClickAdd: () => {
    dispatch(addValue('client_number', 1));
  },
  onClickDel: () => {
    dispatch(addValue('client_number', -1));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputClientNum);
