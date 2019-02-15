// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import styles from '../TemplateManagePage/css/listHeader.css';

export default function ListHeader(): React.Node {
  return (
    <Button className={styles.backBtn}>
      <Link to="/setting" className={styles.backBtnLink}>
        一覧に戻る
      </Link>
    </Button>
  );
}
