// @flow
import * as React from 'react';
import { Table } from '@devexpress/dx-react-grid-material-ui';
import styles from './css/table.css';

type PropsType = {
  key: string,
  type: Symbol,
  rowId?: number | string,
  row?: any,
  height?: number,
};

export default (props: PropsType): React.Node => (
  <Table.Row {...props} className={styles.row} />
);
