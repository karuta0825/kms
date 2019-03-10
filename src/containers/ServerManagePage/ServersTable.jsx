import * as React from 'react';
import { connect } from 'react-redux';
import {
  SelectionState,
  IntegratedSelection,
  EditingState,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  TableSelection,
  TableEditRow,
} from '@devexpress/dx-react-grid-material-ui';
import BorderGrid from '../../components/BorderGrid';
import styles from './css/editor.css';
import { selectServers, updateRows } from './actions';

type PropsType = {
  isEdit: boolean,
  rows: Array<ServerType>,
  columns: Array<{ name: string, title: string }>,
  rowChanges: { [key: string]: ServerType },
  selection: Array<number>,
  onSelectionChange: (Array<number>) => void,
  onRowChangesChange: Object => void,
};

function ServersTable(props: PropsType): React.Node {
  const {
    isEdit,
    rows,
    columns,
    selection,
    rowChanges,
    onSelectionChange,
    onRowChangesChange,
  } = props;
  if (isEdit) {
    return (
      <Grid
        rows={rows}
        columns={columns}
        rootComponent={BorderGrid}
        getRowId={row => row.id}
      >
        <EditingState
          rowChanges={rowChanges}
          editingRowIds={rows.map(row => row.id)}
          onRowChangesChange={onRowChangesChange}
        />
        <VirtualTable />
        <TableHeaderRow />
        <TableEditRow />
      </Grid>
    );
  }
  return (
    <div className={styles.content}>
      <Grid
        rows={rows}
        columns={columns}
        rootComponent={BorderGrid}
        getRowId={row => row.id}
      >
        <SelectionState
          selection={selection}
          onSelectionChange={onSelectionChange}
        />
        <IntegratedSelection />
        <VirtualTable />
        <TableHeaderRow />
        <TableSelection showSelectAll highlightRow selectByRowClick />
      </Grid>
    </div>
  );
}

const mapStateToProps = (state: StateType) => ({
  isEdit: state.serverManagePage.isEdit,
  rows: state.data.servers.filter(
    server =>
      server.project === state.serverManagePage.selectedProject
  ),
  columns: [
    { name: 'type', title: 'タイプ' },
    { name: 'name', title: '名前' },
    { name: 'ip', title: 'IPアドレス' },
    { name: 'version', title: 'バージョン' },
    { name: 'connect_db', title: '接続DB' },
    { name: 'domain', title: 'ドメイン名' },
    { name: 'capacity', title: '収容数' },
    { name: 'project', title: 'プロジェクト名' },
  ],
  selection: state.serverManagePage.selection,
  rowChanges: state.serverManagePage.rowChanges,
});

const mapDispatchToProps = dispatch => ({
  onRowChangesChange: (changeRowsInfo: {
    [id: number]: { [key: string]: any },
  }) => {
    dispatch(updateRows(changeRowsInfo));
  },
  onSelectionChange: selection => {
    dispatch(selectServers(selection));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServersTable);
