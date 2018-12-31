// @flow
import * as React from 'react';
import styles from './css/Switch.css';

type PropsType = {
  name: string,
  isEdit: boolean,
  isSelected: boolean,
  onClick?: Event => void,
};

export default (props: PropsType): React.Node => {
  const { name, isEdit, isSelected, onClick } = props;
  return (
    <input
      className={isSelected ? styles.on : styles.off}
      type="button"
      value={name}
      onClick={onClick}
      disabled={!isEdit}
    />
  );
};
