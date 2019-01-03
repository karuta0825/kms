// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { TableEditRow } from '@devexpress/dx-react-grid-material-ui';
import TableCellSelect from '../../../components/TableCellSelect';
import TableCellDate from '../../../components/TableCellDate';

const TableCells = (props): React.Node => {
  const { column, fenicsList } = props;
  if (column.name === 'create_on' || column.name === 'end_on') {
    return <TableCellDate {...props} />;
  }
  if (column.name === 'fenics_id') {
    return <TableCellSelect {...props} items={fenicsList} />;
  }
  return <TableEditRow.Cell {...props} />;
};

export default connect(state => ({
  fenicsList: state.data.fenics
    .filter(item => item.is_mobile === 0)
    .map(item => ({
      id: item.fenics_id,
      name: item.fenics_id,
      value: item.fenics_id,
    })),
}))(TableCells);
