// @flow
import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ComputerIcon from '@material-ui/icons/Computer';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PersonIcon from '@material-ui/icons/Person';
import styles from './css/index.css';

type PropsType = {
  history: { push: string => void },
};

export default (props: PropsType): React.Node => {
  const { history } = props;
  return (
    <List className={styles.wrapper}>
      <ListItem
        className={styles.item}
        button
        onClick={() => {
          history.push('/setting/server');
        }}
      >
        <div className={styles.itemLeft}>
          <ComputerIcon className={styles.icon} />
        </div>
        <div className={styles.itemCenter}>
          <h3 className={styles.title}>サーバ</h3>
          <p className={styles.description}>説明</p>
        </div>
        <div className={styles.itemRight}>
          <KeyboardArrowRightIcon />
        </div>
      </ListItem>

      <ListItem
        className={styles.item}
        button
        onClick={() => {
          history.push('/setting/service');
        }}
      >
        <div className={styles.itemLeft}>
          <RoomServiceIcon className={styles.icon} />
        </div>
        <div className={styles.itemCenter}>
          <h3 className={styles.title}>サービス</h3>
          <p className={styles.description}>説明</p>
        </div>
        <div className={styles.itemRight}>
          <KeyboardArrowRightIcon />
        </div>
      </ListItem>

      <ListItem
        className={styles.item}
        button
        onClick={() => {
          history.push('/setting/memoTemplate');
        }}
      >
        <div className={styles.itemLeft}>
          <AssignmentIcon className={styles.icon} />
        </div>
        <div className={styles.itemCenter}>
          <h3 className={styles.title}>メモテンプレート</h3>
          <p className={styles.description}>説明</p>
        </div>
        <div className={styles.itemRight}>
          <KeyboardArrowRightIcon />
        </div>
      </ListItem>

      <ListItem
        className={styles.item}
        button
        onClick={() => {
          history.push('/setting/account');
        }}
      >
        <div className={styles.itemLeft}>
          <PersonIcon className={styles.icon} />
        </div>
        <div className={styles.itemCenter}>
          <h3 className={styles.title}>アカウント情報</h3>
          <p className={styles.description}>説明</p>
        </div>
        <div className={styles.itemRight}>
          <KeyboardArrowRightIcon />
        </div>
      </ListItem>
    </List>
  );
};
