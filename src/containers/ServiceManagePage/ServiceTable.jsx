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
import { selectService, updateRows } from './actions';

type PropsType = {
  isEdit: boolean,
  rows: Array<ServiceType>,
  columns: Array<{ name: string, title: string }>,
  rowChanges: ServiceType,
  selection: Array<number>,
  onSelectionChange: (Array<number>) => void,
  onRowChangesChange: Object => void,
};

function ServiceTableNew(props: PropsType): React.Node {
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
        <TableSelection
          showSelectAll
          highlightRow
          selectByRowClick
        />
      </Grid>
    </div>
  );
}

const mapStateToProps = (state: StateType) => ({
  isEdit: state.serviceManagePage.isEdit,
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
  selection: state.serviceManagePage.selection,
  rowChanges: state.serviceManagePage.rowChanges,
});

const mapDispatchToProps = dispatch => ({
  onRowChangesChange: (changeRowsInfo: {
    [id: number]: { [key: string]: any },
  }) => {
    dispatch(updateRows(changeRowsInfo));
  },
  onSelectionChange: selection => {
    dispatch(selectService(selection));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceTableNew);
