// @flow
import * as React from 'react';
import { Table } from '@devexpress/dx-react-grid-material-ui';
import styles from './css/table.css';

export default (props): React.Node => (
  <Table.Row {...props} className={styles.row} />
);
