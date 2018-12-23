// @flow
import * as React from 'react';
import { Switch } from '@material-ui/core';
import styles from './css/switchControl.css';

type PropsType = {
  title: string,
  isChecked: boolean,
  isEdit: boolean,
  onChange: Event => void,
};

export default function SwitchControl(
  props: PropsType
): React.Node {
  const { title, isChecked, isEdit, onChange } = props;
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      <div className={styles.switchWrapper}>
        <span className={styles.switchState}>
          {isChecked ? 'あり' : 'なし'}
        </span>
        <Switch
          className={styles.switch}
          checked={isChecked}
          onChange={onChange}
          disabled={!isEdit}
          value="switch"
        />
      </div>
    </div>
  );
}
