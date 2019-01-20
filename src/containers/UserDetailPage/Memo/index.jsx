// @flow
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EventNoteIcon from '@material-ui/icons/EventNote';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import styles from './css/memo.css';
import MemoList from './MemoList';
import MemoDialog from './MemoDialog';

export default function Memo(props): React.Node {
  return (
    <div className={props.className}>
      <div className={styles.title}>
        <EventNoteIcon />
        <span className={styles.titleText}>メモ</span>
      </div>
      <Paper className={styles.paper}>
        <div className={styles.header}>
          <FormControl className={styles.memoSelecter}>
            <NativeSelect
              value={10}
              onChange={() => {}}
              name="memo"
            >
              <option value="">None</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>

          <Button
            variant="fab"
            mini
            color="secondary"
            aria-label="Add"
            className={styles.addBtn}
          >
            <AddIcon />
          </Button>
        </div>
        <div className={styles.content}>
          <MemoList />
        </div>
      </Paper>
      <MemoDialog />
    </div>
  );
}
