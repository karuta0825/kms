// @flow
import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import styles from './css/MenuIcon.css';

type PropsType = {
  isActive: boolean,
  onClick: (Event) => void,
};

export default function MenuIcon(Icon: any, title: string): (PropsType) => React.Node {
  return (props: PropsType): React.Node => {
    const { isActive, onClick } = props;
    return (
      <div className={styles.wrapper}>
        <IconButton
          className={ isActive ? styles.isActive : styles.nonActive}
          color="secondary"
          onClick={onClick}
        >
          <Icon />
          <div className={styles.title}>{title}</div>
        </IconButton>
      </div>
    );
  };
}
