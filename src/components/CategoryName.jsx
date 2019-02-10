// @flow
import * as React from 'react';
import styles from './css/CategoryName.css';

type PropsType = {
  name: string,
};

export default function CategoryName({
  name,
}: PropsType): React.Node {
  return <div className={styles.self}>{name}</div>;
}
