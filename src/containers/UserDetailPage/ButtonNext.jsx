// @flow
import * as React from 'react';
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import styles from './css/userinfo.css';

export default function ButtonBack(props) {
  return (
    <Button className={styles.nextBtn}>
      次のユーザー<ArrowRightIcon />
    </Button>
  );
}
