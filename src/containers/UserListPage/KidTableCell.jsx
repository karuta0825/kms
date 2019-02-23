// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Table } from '@devexpress/dx-react-grid-material-ui';
import StarRate from '@material-ui/icons/StarRate';
import Lock from '@material-ui/icons/Lock';

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
          color: '#f80054',
          fontSize: '13px',
        }}
      >
        {value}
      </Link>
    </Table.Cell>
  );
};

const SpecialCell = ({ row, ...restProps }): React.Node => {
  const { is_marked, end_on } = row;
  const iconStyle = { fontSize: '15px', color: '#2b343c' };
  if (end_on) {
    return (
      <Table.Cell {...restProps}>
        <Lock style={iconStyle} />
      </Table.Cell>
    );
  }

  if (is_marked === '1') {
    return (
      <Table.Cell {...restProps}>
        <StarRate style={iconStyle} />
      </Table.Cell>
    );
  }

  return <Table.Cell {...restProps}> </Table.Cell>;
};

export default (props: CellPropsType): React.Node => {
  const { column } = props;
  if (column.name === 'kid') {
    return <KidCell {...props} />;
  }

  if (column.name === 'is_marked') {
    return <SpecialCell {...props} />;
  }

  return <Table.Cell {...props} />;
};
