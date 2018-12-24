// @flow
import * as React from 'react';
import { Select, MenuItem, Input } from '@material-ui/core';
import styles from './css/TextInput.css';

type PropsType = {
  isEdit: boolean,
  title: string,
  value: string,
  items: Array<Object>,
  onChange: Event => void,
};

export default (props: PropsType): React.Node => {
  const { isEdit, title, value, items, onChange } = props;
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      {isEdit && (
        <Select
          className={styles.text}
          value={value}
          onChange={onChange}
        >
          <MenuItem value="nothing">
            <em>なし</em>
          </MenuItem>
          {items.map(item => (
            <MenuItem value={item.name} key={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      )}
      {!isEdit && (
        <Select
          className={styles.text}
          value={value}
          input={
            <Input name="name" id="name-readonly" readOnly />
          }
        >
          <MenuItem value={value}>
            <em>{value}</em>
          </MenuItem>
        </Select>
      )}
    </div>
  );
};
