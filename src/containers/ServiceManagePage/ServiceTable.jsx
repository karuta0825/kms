// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { EditingState } from '@devexpress/dx-react-grid';
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
} from '@devexpress/dx-react-grid-material-ui';
import BorderGrid from '../../components/BorderGrid';
import EditCommand from './EditCommand';
import {
  changeEditingRowIds,
  changeDeletingRowIds,
} from './actions';

type PropsType = {
  rows: Array<ServiceType>,
  columns: Array<{ name: string, title: string }>,
  editingRowIds: Array<number>,
  onEditingRowIdsChange: (Array<number>) => void,
  onCommitChanges: ({
    added?: Array<{
      service_id: string,
      service_name: string,
      sales_id: string,
    }>,
    changed?: {
      [key: number]: {
        service_id?: string,
        service_name?: string,
        sales_id?: string,
      },
    },
    deleted?: Array<number>,
  }) => void,
};

function ServiceTable(props: PropsType): React.Node {
  const {
    rows,
    columns,
    editingRowIds,
    onEditingRowIdsChange,
    onCommitChanges,
  } = props;
  return (
    <Grid
      rows={rows}
      columns={columns}
      rootComponent={BorderGrid}
      getRowId={row => row.id}
    >
      <EditingState
        editingRowIds={editingRowIds}
        onEditingRowIdsChange={onEditingRowIdsChange}
        onCommitChanges={onCommitChanges}
      />
      <VirtualTable />
      <TableHeaderRow />
      <TableEditRow />
      <TableEditColumn
        width={80}
        showAddCommand
        showEditCommand
        showDeleteCommand
        commandComponent={EditCommand}
      />
    </Grid>
  );
}

const mapStateToProps = (state: StateType) => ({
  rows: state.data.services.filter(
    service =>
      service.version ===
        state.serviceManagePage.selectedVersion &&
      service.is_setup_info === 0
  ),
  columns: [
    { name: 'service_id', title: 'サービスID' },
    { name: 'service_name', title: 'サービス名' },
    { name: 'sales_id', title: '型名' },
  ],
  editingRowIds: state.serviceManagePage.editingRowIds,
});

const mapDispatchToProps = dispatch => ({
  onEditingRowIdsChange: rowIds => {
    dispatch(changeEditingRowIds(rowIds));
  },
  onCommitChanges: changes => {
    const { added, changed, deleted } = changes;
    if (added) {
      console.log(added);
    }
    if (changed) {
      console.log(changed);
    }
    if (deleted) {
      dispatch(changeDeletingRowIds(deleted));
    }
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceTable);
