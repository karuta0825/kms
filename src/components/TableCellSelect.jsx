// @flow
import * as React from 'react';
import classNames from 'classnames';
import { MenuItem, Select } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

type PropsType = {
  column?: Object,
  row?: any,
  tableRow?: Object,
  tableColumn?: Object,
  value?: any,
  onValueChange: Event => void,
  style?: Object,
  classes: Object,
  editingEnabled: boolean,
  children?: Node,
  className?: string,
  items: Array<{
    id: number | string,
    name: string,
    value: string,
  }>,
  inputProps: Object,
};

const styles = theme => ({
  cell: {
    paddingRight: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
  },
  inputRoot: {
    width: '100%',
  },
  inputRight: {
    textAlign: 'right',
  },
  inputCenter: {
    textAlign: 'center',
  },
});

const EditCellBase = ({
  column,
  value,
  onValueChange,
  style,
  classes,
  children,
  row,
  tableRow,
  tableColumn,
  editingEnabled = true,
  className,
  items,
  inputProps,
  nothing = true,
  ...restProps
}: PropsType): React.Node => {
  const inputClasses = classNames({
    [classes.inputRight]:
      tableColumn && tableColumn.align === 'right',
    [classes.inputCenter]:
      tableColumn && tableColumn.align === 'center',
  });
  return (
    <TableCell
      className={classNames(classes.cell, className)}
      style={style}
      editingEnabled
      {...restProps}
    >
      {children || (
        <Select
          className={classes.inputRoot}
          value={value || ''}
          onChange={e => onValueChange(e.target.value)}
          inputProps={inputProps}
        >
          {nothing && (
            <MenuItem value="">
              <em>なし</em>
            </MenuItem>
          )}
          {items &&
            items.map(item => (
              <MenuItem key={item.id} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
        </Select>
      )}
    </TableCell>
  );
};

export default withStyles(styles, { name: 'EditCell' })(EditCellBase);
