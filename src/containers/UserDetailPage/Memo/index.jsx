// @flow
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import EventNoteIcon from '@material-ui/icons/EventNote';
import styles from './css/memo.css';
import MemoList from './MemoList';
import MemoDialog from './MemoDialog';
import ButtonAdd from './ButtonAdd';
import FilterMemo from './FilterMemo';

export default function Memo(): React.Node {
  return (
    <div>
      <div className={styles.title}>
        <EventNoteIcon />
        <span className={styles.titleText}>メモ</span>
      </div>
      <Paper className={styles.paper}>
        <div className={styles.header}>
          <FilterMemo />
          <ButtonAdd />
        </div>
        <div className={styles.content}>
          <MemoList />
        </div>
      </Paper>
      <MemoDialog />
    </div>
  );
}
