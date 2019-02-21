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
import { searchUser } from '../../utils';
import { selectUser } from './actions';

type PropsType = {
  rows: Array<KidType>,
  columns: Array<{ name: string, title: string }>,
  selection: Array<number>,
  onSelectionChange: (Array<number>) => void,
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
    onSelectionChange,
    defaultColumnWidths,
  } = props;
  return (
    <Grid
      rows={rows}
      columns={columns}
      rootComponent={BorderGrid}
    >
      <FilteringState defaultFilters={[]} />
      <IntegratedFiltering />
      <SelectionState
        selection={selection}
        onSelectionChange={onSelectionChange}
      />
      <IntegratedSelection />

      <SortingState />
      <IntegratedSorting />
      <VirtualTable />
      <TableColumnResizing
        defaultColumnWidths={defaultColumnWidths}
      />
      <TableHeaderRow showSortingControls />
      <TableFilterRow />
      <TableSelection
        showSelectAll
        highlightRow
        selectByRowClick
      />
      <TableFixedColumns
        leftColumns={[
          TableSelection.COLUMN_TYPE,
          'kid',
          'user_name',
        ]}
      />
    </Grid>
  );
}

const mapStateToProps = (state: StateType) => ({
  selection: state.userListPage.selection,
  rows: searchUser(state.data.kids, state.userListPage.filter),
  columns: [
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
    { width: 85, columnName: 'kid' },
    { width: 150, columnName: 'user_name' },
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
  onSelectionChange: selections => {
    dispatch(selectUser(selections));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KidTable);
