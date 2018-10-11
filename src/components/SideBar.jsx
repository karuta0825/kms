// @flow
import * as React from 'react';
import styles from './css/SideBar.css';

type PropsType = {
  isSideBarOpen: boolean,
  onClick: (boolean) => void,
};

export default class SideBar extends React.Component<PropsType> {
  render(): React.Node {
    const { isSideBarOpen, onClick } = this.props;
    const Style = isSideBarOpen
      ? `${styles.default} ${styles.open}`
      : `${styles.default}`;
    return (
      <div className={Style}>
        <button type="button" onClick={onClick}>
          CLOSE
        </button>

        <List>
        </List>

      </div>
    );
  }
}
