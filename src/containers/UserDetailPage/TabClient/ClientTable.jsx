import * as React from 'react';
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
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { selectClient, updateRows } from './actions';
import TableCells from './TableCells';

type PropsType = {
  isEdit: boolean,
  rows: Array<ClientTab>,
  columns: Array<{ name: string, title: string }>,
  selection: Array<number>,
  rowChanges: Object,
  onSelectionChange: (Array<number>) => void,
  onRowChangesChange: Object => void,
};

const styles = () => ({
  rootContainer: {
    marginTop: '25px',
    border: '1px solid rgba(224, 224, 224, 1)',
  },
});

const CustomGridComponent = ({ classes, ...restProps }) => (
  <Grid.Root {...restProps} className={classes.rootContainer} />
);

export const CustomGrid = withStyles(styles, {
  name: 'CustomGrid',
})(CustomGridComponent);

function ClientTable(props: PropsType): React.Node {
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
        rootComponent={CustomGrid}
      >
        <EditingState
          rowChanges={rowChanges}
          onRowChangesChange={onRowChangesChange}
          editingRowIds={rows.map((row, idx) => idx)}
          columnExtensions={[
            { columnName: 'client_id', editingEnabled: false },
            { columnName: 'client_pass', editingEnabled: false },
          ]}
        />
        <VirtualTable />
        <TableHeaderRow />
        <TableEditRow cellComponent={TableCells} />
      </Grid>
    );
  }

  return (
    <div>
      <Grid
        rows={rows}
        columns={columns}
        rootComponent={CustomGrid}
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

const mapStateToProps = state => ({
  isEdit: state.userDetailPage.clientTab.isEdit,
  rows: state.userDetailPage.clientTab.inputValues,
  columns: [
    { name: 'client_id', title: 'ユーザ名' },
    { name: 'client_pass', title: 'パスワード' },
    { name: 'pc_name', title: 'パソコン名' },
    { name: 'fenics_id', title: '対応fenicsID' },
    { name: 'create_on', title: '作成日' },
    { name: 'end_on', title: '終了日' },
  ],
  selection: state.userDetailPage.clientTab.selection,
  rowChanges: state.userDetailPage.clientTab.rowChanges,
});

const mapDispatchToProps = dispatch => ({
  onSelectionChange: selections => {
    dispatch(selectClient(selections));
  },
  onRowChangesChange: changeRowsInfo => {
    dispatch(updateRows(changeRowsInfo));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientTable);
