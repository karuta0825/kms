// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { changeValue } from './actions';
import SelectionInput from '../../components/SelectionInput';
import type { PropsType } from '../../components/SelectionInput';

function SelectDB(props: PropsType): React.Node {
  return <SelectionInput {...props} />;
}

function fmtServerMap(
  servers: Array<ServerType>
): Array<{ id: number, name: string, value: string }> {
  return servers
    .filter(server => server.type === 'DB')
    .map(server => ({
      id: server.id,
      name: server.name,
      value: server.name,
    }));
}

const mapStateToProps = (state: StateType) => ({
  title: '接続先DB',
  isEdit: true,
  value: state.serverManagePage.inputValues.connect_db,
  items: fmtServerMap(state.data.servers),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('connect_db', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectDB);
