// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import {
  SelectionState,
  IntegratedSelection,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  TableSelection,
} from '@devexpress/dx-react-grid-material-ui';
import BorderGrid from '../../../components/BorderGrid';
import { selectHistory } from './actions';

type PropsType = {
  rows: Array<HistoryType>,
  columns: Array<{ name: string, title: string }>,
  selection: Array<number>,
  onSelectionChange: (Array<number>) => void,
};

function filterItems(
  historys: Array<HistoryType>,
  filter: string
): Array<HistoryType> {
  if (filter === '') return historys;

  return historys.filter(
    history => history.item_name === filter
  );
}

function HistoryTable(props: PropsType): React.Node {
  const { rows, columns, selection, onSelectionChange } = props;
  return (
    <div style={{ height: 'calc( 100% - 30px)' }}>
      <Grid
        rows={rows}
        columns={columns}
        rootComponent={BorderGrid}
      >
        <SelectionState
          selection={selection}
          onSelectionChange={onSelectionChange}
        />
        <IntegratedSelection />
        <VirtualTable height="auto" />
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
  rows: filterItems(
    state.data.historys,
    state.userDetailPage.historyTab.filter
  ),
  columns: [
    { name: 'create_on', title: '更新日' },
    { name: 'content_name', title: 'タブ' },
    { name: 'item_name', title: '項目' },
    { name: 'msg', title: '内容' },
    { name: 'creater', title: '更新者' },
  ],
  selection: state.userDetailPage.historyTab.selection,
});

const mapDispathToProps = dispatch => ({
  onSelectionChange: selections => {
    dispatch(selectHistory(selections));
  },
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(HistoryTable);
