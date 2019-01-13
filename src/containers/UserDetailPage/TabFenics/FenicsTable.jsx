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
import { selectFenics, updateRows } from './actions';
import TableCells from './TableCells';

type PropsType = {
  isEdit: boolean,
  rows: Array<FenicsType>,
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

function FenicsTable(props: PropsType): React.Node {
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
            { columnName: 'fenics_id', editingEnabled: false },
            { columnName: 'password', editingEnabled: false },
            { columnName: 'create_on', editingEnabled: false },
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
  isEdit: state.userDetailPage.fenicsTab.isEdit,
  rows: state.userDetailPage.fenicsTab.inputValues,
  columns: [
    { name: 'fenics_id', title: 'ユーザ名' },
    { name: 'password', title: 'パスワード' },
    { name: 'fenics_ip', title: 'IPアドレス' },
    { name: 'start_on', title: '開始日' },
    { name: 'end_on', title: '終了日' },
    { name: 'category', title: '分類' },
    { name: 'create_on', title: '作成日' },
  ],
  selection: state.userDetailPage.fenicsTab.selection,
  rowChanges: state.userDetailPage.fenicsTab.rowChanges,
});

const mapDispatchToProps = dispatch => ({
  onSelectionChange: selections => {
    dispatch(selectFenics(selections));
  },
  onRowChangesChange: changeRowsInfo => {
    dispatch(updateRows(changeRowsInfo));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FenicsTable);
