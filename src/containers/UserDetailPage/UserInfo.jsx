// @flow
import * as React from 'react';
import styles from './css/userinfo.css';
import Tab from './Tab';
import ButtonBack from './ButtonBack';
import ButtonPrev from './ButtonPrev';
import ButtonNext from './ButtonNext';

export default function UserInfo(props): React.Node {
  return (
    <div className={props.className}>
      <div className={styles.action}>
        <ButtonBack />
        <ButtonNext />
        <ButtonPrev />
      </div>
      <Tab />
    </div>
  );
}
