// @flow
import * as React from 'react';
import classNames from 'classnames';
import Input from '@material-ui/core/Input';
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
      {...restProps}
    >
      {children || (
        <Input
          type="number"
          className={classes.inputRoot}
          classes={{ input: inputClasses }}
          value={value || ''}
          disabled={!editingEnabled}
          onChange={e => onValueChange(e.target.value)}
        />
      )}
    </TableCell>
  );
};

export default withStyles(styles, { name: 'EditCell' })(
  EditCellBase
);
