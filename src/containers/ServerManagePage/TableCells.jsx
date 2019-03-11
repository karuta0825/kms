// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { TableEditRow } from '@devexpress/dx-react-grid-material-ui';
import TableCellSelect from '../../components/TableCellSelect';
import TableCellDate from '../../components/TableCellDate';

type PropsType = {
  row: any,
  column: {
    name: string,
    title?: string,
    getCellValue?: (row: any, columnName: string) => any,
  },
  value: any,
  editingEnabled: boolean,
  onValueChange: (newValue: any) => void,
  dbServers: Array<{ id: number, name: string, value: string }>,
  versions: Array<{ id: number, name: string, value: string }>,
  types: Array<{ id: number, name: string, value: string }>,
  rowChanges: any,
};

const TableCells = (props: PropsType): React.Node => {
  const {
    column,
    dbServers,
    versions,
    types,
    row,
    rowChanges,
  } = props;
  const changes = rowChanges[row.id];
  if (column.name === 'create_on' || column.name === 'end_on') {
    return <TableCellDate {...props} />;
  }

  if (column.name === 'type') {
    return (
      <TableCellSelect {...props} items={types} nothing={false} />
    );
  }

  if (column.name === 'connect_db') {
    if (changes && changes.type) {
      const editingEnabled = changes.type === 'AP';
      const connectDBProps = { ...props, value: '', editingEnabled };
      if (editingEnabled) {
        return (
          <TableCellSelect
            {...props}
            items={dbServers}
            nothing={false}
          />
        );
      }
      return <TableEditRow.Cell {...connectDBProps} />;
    }
    if (row.type === 'AP') {
      return (
        <TableCellSelect
          {...props}
          items={dbServers}
          nothing={false}
        />
      );
    }
    const restProps = { ...props, editingEnabled: false, value: '' };
    return <TableEditRow.Cell {...restProps} />;
  }

  if (column.name === 'domain') {
    const editingEnabled =
      (changes && changes.type === 'DB') ||
      (changes && changes.type === 'AD') ||
      false;
    const domainProps = { ...props, editingEnabled };
    return <TableEditRow.Cell {...domainProps} />;
  }

  if (column.name === 'version') {
    return (
      <TableCellSelect {...props} items={versions} nothing={false} />
    );
  }

  return <TableEditRow.Cell {...props} />;
};

export default connect((state: StateType) => ({
  dbServers: state.data.servers
    .filter(server => server.type === 'DB')
    .map(item => ({
      id: item.id,
      name: item.name,
      value: item.name,
    })),
  versions: [
    { id: 'LM', name: 'LM', value: 'LM' },
    { id: 'ES', name: 'ES', value: 'ES' },
  ],
  types: [
    { id: 'AP', name: 'AP', value: 'AP' },
    { id: 'DB', name: 'DB', value: 'DB' },
    { id: 'WEB', name: 'WEB', value: 'WEB' },
    { id: 'FL', name: 'FL', value: 'FL' },
    { id: 'AD', name: 'AD', value: 'AD' },
  ],
  rowChanges: state.serverManagePage.rowChanges,
}))(TableCells);
