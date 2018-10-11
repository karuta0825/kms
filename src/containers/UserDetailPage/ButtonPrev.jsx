// @flow
import * as React from 'react';
import Button from '@material-ui/core/Button';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import styles from './css/userInfo.css';

export default function ButtonBack(props) {
  return (
    <Button className={styles.prevBtn}>
      <ArrowLeftIcon />前のユーザー
    </Button>
  );
}
