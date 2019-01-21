// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import styles from './css/item.css';
import priorityStyles from './css/priority.css';
import { toggleModal, selectMemo } from './actions';

type PropsType = {
  memos: Array<MemoType>,
  onClickMemo: number => void,
};

function setPriorityStyle(priority: MemoPriorityType): string {
  return `${styles.colorBar} ${priorityStyles[priority]}`;
}

function MemoList(props: PropsType): React.Node {
  const { memos, onClickMemo } = props;
  return (
    <List style={{ padding: 0 }}>
      {memos &&
        memos.map((memo, idx) => (
          <ListItem
            className={styles.wrapper}
            key={memo.id}
            button
            onClick={() => onClickMemo(idx)}
          >
            <div className={setPriorityStyle(memo.priority)} />
            <div className={styles.content}>
              <div className={styles.title}>{memo.title}</div>
              <div className={styles.msg}>{memo.short_msg}</div>
              <div className={styles.footer}>
                {`${memo.create_on} ${memo.name}`}
              </div>
            </div>
          </ListItem>
        ))}
    </List>
  );
}

const mapStateToProps = (state: StateType) => ({
  memos: state.data.memos,
});

const mapDispatchProps = dispatch => ({
  onClickMemo: idx => {
    dispatch(toggleModal(true));
    dispatch(selectMemo(idx));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(MemoList);
