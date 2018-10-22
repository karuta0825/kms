// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styles from './css/header.css';

type PropsType = {
  title: string,
};

function Header(props: PropsType): React.Node {
  const { title } = props;
  return (
    <div className={styles.wrapper}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={styles.title}>
            {title}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => ({
  title: state.header.title,
});

export default connect(
  mapStateToProps,
)(Header);