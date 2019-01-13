// @flow
import * as React from 'react';
import { TableEditRow } from '@devexpress/dx-react-grid-material-ui';
import TableCellDate from '../../../components/TableCellDate';

type PropsType = {
  column: { name: string, title: string },
};

export default function TableCells(
  props: PropsType
): React.Node {
  const { column } = props;
  if (
    column.name === 'start_on' ||
    column.name === 'end_on' ||
    column.name === 'create_on'
  ) {
    return <TableCellDate {...props} />;
  }
  return <TableEditRow.Cell {...props} />;
}
