import React from 'react';
import classNames from 'classnames';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import UserMake from '../containers/UserMakePage';
import UserRegister from '../containers/UserRegisterPage';
import UserList from '../containers/UserListPage';
import UserDetail from '../containers/UserDetailPage';

type PropsType = {
  classes: Object,
  theme: any,
  title: string,
  isOpen: boolean,
  toggleDrawer: boolean => void,
};

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit,
  },
});

class MenuDrawer extends React.Component<PropsType> {
  render() {
    const {
      classes,
      theme,
      isOpen,
      title,
      toggleDrawer,
    } = this.props;
    return (
      <Router>
        <div className={classes.root}>
          <AppBar
            position="absolute"
            className={classNames(
              classes.appBar,
              isOpen && classes.appBarShift
            )}
          >
            <Toolbar disableGutters={!isOpen}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={() => toggleDrawer(true)}
                className={classNames(
                  classes.menuButton,
                  isOpen && classes.hide
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !isOpen && classes.drawerPaperClose
              ),
            }}
            open={isOpen}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={() => toggleDrawer(false)}>
                {theme.direction === 'rtl' ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <Divider />
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => {
                  console.log(props);
                  return null;
                }}
              />
              <Route path="/makeKid" component={UserMake} />
              <Route
                path="/registerKid"
                component={UserRegister}
              />
              <Route exact path="/kids" component={UserList} />
              <Route
                path="/kids/detail/:id"
                component={UserDetail}
              />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  MenuDrawer
);
