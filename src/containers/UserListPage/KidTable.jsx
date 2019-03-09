// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import {
  SelectionState,
  IntegratedSelection,
  SortingState,
  IntegratedSorting,
  FilteringState,
  IntegratedFiltering,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  TableColumnResizing,
  TableFixedColumns,
  TableSelection,
  TableFilterRow,
} from '@devexpress/dx-react-grid-material-ui';
import BorderGrid from '../../components/BorderGrid';
import KidTableCell from './KidTableCell';
import KidTableRow from './KidTableRow';
import { searchUser } from '../../utils';
import { selectUser, changeColumnFilters } from './actions';

type PropsType = {
  rows: Array<KidType>,
  columns: Array<{ name: string, title: string }>,
  selection: Array<number>,
  columnFilters: Array<{ [key: string]: string }>,
  onSelectionChange: (Array<number>) => void,
  onFiltersChange: (Array<{ [key: string]: string }>) => void,
  defaultColumnWidths: Array<{
    columnName: string,
    width: number,
  }>,
};

function KidTable(props: PropsType): React.Node {
  const {
    rows,
    columns,
    selection,
    columnFilters,
    onSelectionChange,
    onFiltersChange,
    defaultColumnWidths,
  } = props;
  return (
    <Grid
      rows={rows}
      columns={columns}
      rootComponent={BorderGrid}
      getRowId={row => row.id}
    >
      <FilteringState
        filters={columnFilters}
        onFiltersChange={onFiltersChange}
      />
      <SelectionState
        selection={selection}
        onSelectionChange={onSelectionChange}
      />
      <SortingState />

      <IntegratedFiltering />
      <IntegratedSelection />
      <IntegratedSorting />

      <VirtualTable
        cellComponent={KidTableCell}
        rowComponent={KidTableRow}
      />
      <TableColumnResizing
        defaultColumnWidths={defaultColumnWidths}
      />
      <TableHeaderRow showSortingControls />
      <TableFilterRow
        rowHeight={40}
        messages={{ filterPlaceholder: '...' }}
      />
      <TableSelection showSelectAll />
      <TableFixedColumns
        leftColumns={[
          TableSelection.COLUMN_TYPE,
          'is_marked',
          'kid',
          'user_name',
        ]}
      />
    </Grid>
  );
}

const mapStateToProps = (state: StateType) => ({
  currentPage: state.userListPage.currentPage,
  selection: state.userListPage.selection,
  columnFilters: state.userListPage.columnFilters,
  rows: searchUser(state.data.kids, state.userListPage.filter),
  columns: [
    { title: '個別', name: 'is_marked' },
    { title: 'KID', name: 'kid' },
    { title: '顧客名', name: 'user_name' },
    { title: 'サーバ', name: 'server' },
    { title: 'ユーザーキー', name: 'userkey' },
    { title: 'DBパスワード', name: 'db_password' },
    { title: 'Fenicsキー', name: 'fenics_key' },
    { title: 'ユーザ数(CitrixID数)', name: 'client_number' },
    { title: 'クライアント数(FENICSID数)', name: 'number_pc' },
    { title: 'ライセンス', name: 'license' },
    { title: '端末id範囲', name: 'range_id' },
    { title: '更新日', name: 'update_on' },
    { title: 'SA販社名', name: 'sa_company' },
    { title: 'SA担当者', name: 'sa_name' },
    { title: 'SE販社名', name: 'se_company' },
  ],
  defaultColumnWidths: [
    { width: 60, columnName: 'is_marked' },
    { width: 85, columnName: 'kid' },
    { width: 300, columnName: 'user_name' },
    { width: 150, columnName: 'server' },
    { width: 150, columnName: 'userkey' },
    { width: 150, columnName: 'db_password' },
    { width: 150, columnName: 'fenics_key' },
    { width: 150, columnName: 'client_number' },
    { width: 150, columnName: 'number_pc' },
    { width: 150, columnName: 'license' },
    { width: 150, columnName: 'range_id' },
    { width: 150, columnName: 'update_on' },
    { width: 150, columnName: 'sa_company' },
    { width: 150, columnName: 'sa_name' },
    { width: 150, columnName: 'se_company' },
  ],
});

const mapDispatchToProps = dispatch => ({
  onSelectionChange: selection => {
    dispatch(selectUser(selection));
  },
  onFiltersChange: (
    filters: Array<[{ columnName: string, value: string }]>
  ) => {
    dispatch(changeColumnFilters(filters));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KidTable);
