// @flow
import * as React from 'react';
import styles from './css/index.css';
import Button from '@material-ui/core/Button';

export default (props) => {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.environments}>
          <div className={styles.environments__header}>
          </div>
          <div className={styles.environments__list}>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.actions}>
            <Button
              variant="contained"
              color="primary"
              size="medium"
            >
            Button
            </Button>
          </div>
          <div className={styles.table}></div>
        </div>
      </div>
    </div>
  );
}