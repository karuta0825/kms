// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Table } from '@devexpress/dx-react-grid-material-ui';

type CellPropsType = {
  value: any,
  row: any,
  column: {
    name: string,
    title?: string,
    getCellValue?: (row: any, columnName: string) => void,
  },
  children?: React.Node,
};

const KidCell = ({ value, row, ...restProps }): React.Node => {
  const url = `/kidList/detail/${row.id}`;
  return (
    <Table.Cell {...restProps}>
      <Link
        to={url}
        style={{
          textDecoration: 'none',
          color: 'red',
        }}
      >
        {value}
      </Link>
    </Table.Cell>
  );
};

export default (props: CellPropsType): React.Node => {
  const { column } = props;
  if (column.name === 'kid') {
    return <KidCell {...props} />;
  }
  return <Table.Cell {...props} />;
};
