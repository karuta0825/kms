// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { changeValue } from './actions';
import SelectionInput from '../../../components/SelectionInput';
import { filterServer } from '../../../utils';
import type { PropsType } from '../../../components/SelectionInput';

function SelectAPServer(props: PropsType): React.Node {
  return <SelectionInput {...props} />;
}

const mapStateToProps = (state: StateType) => ({
  title: 'DBサーバ',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  value: state.userDetailPage.baseInfoTab.inputValues.dbserver,
  items: filterServer(
    state.data.servers,
    state.data.baseInfo.version,
    'DB'
  ),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('dbserver', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectAPServer);
