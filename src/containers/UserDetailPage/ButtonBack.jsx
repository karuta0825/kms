// @flow
import * as React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styles from './css/userinfo.css';

export default function ButtonBack(props) {
  return (
    <Button className={styles.backBtn}>
      <Link to="/kidList" className={styles.backBtnLink}>一覧に戻る</Link>
    </Button>
  );
}
