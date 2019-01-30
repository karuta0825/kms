// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TabSystem from './TabSystem';
import TabCustomer from './TabCustomer';
import { changeTabIndex } from './actions';
import TabLicense from './TabLicense';
import TabClient from './TabClient';
import TabFenics from './TabFenics';
import TabBuisv from './TabBuisv';

function TabContainer(
  { children } = {
    children: React.Node,
  }
): React.Node {
  return (
    <Typography
      component="div"
      style={{
        padding: 8 * 3,
        height: '900',
        backgroundColor: 'white',
        borderTop: '1px solid #0000001f',
      }}
    >
      {children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    // width: '100%',
    height: 'calc(100% - 55px)',
    backgroundColor: theme.palette.background.paper,
    marginTop: '3px',
  },
  tabTitle: {
    minWidth: '110px',
  },
});

type PropsType = {
  classes: Object,
  value: number,
  handleChange: (any, number) => void,
};

function TabManager(props: PropsType): React.Node {
  const { classes, value, handleChange } = props;
  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        scrollable
        scrollButtons="auto"
      >
        <Tab label="システム情報" className={classes.tabTitle} />
        <Tab label="拠点情報" className={classes.tabTitle} />
        <Tab label="ライセンス" className={classes.tabTitle} />
        <Tab
          label="クライアント(Citrix数)"
          className={classes.tabTitle}
        />
        <Tab label="Fenics" className={classes.tabTitle} />
        <Tab label="ビジV" className={classes.tabTitle} />
        <Tab label="パートナ" className={classes.tabTitle} />
        <Tab label="モバイル" className={classes.tabTitle} />
        <Tab label="履歴" className={classes.tabTitle} />
      </Tabs>
      {value === 0 && <TabSystem />}
      {value === 1 && <TabCustomer />}
      {value === 2 && <TabLicense />}
      {value === 3 && <TabClient />}
      {value === 4 && <TabFenics />}
      {value === 5 && <TabBuisv />}
      {value === 6 && <TabContainer>Item Seven</TabContainer>}
      {value === 7 && <TabContainer>Item Eigth</TabContainer>}
      {value === 8 && <TabContainer>Item Eigth</TabContainer>}
    </Paper>
  );
}

const mapStateToProps = state => ({
  value: state.userDetailPage.tabIndex,
});

const mapDispatchToProps = (dispatch): Object => ({
  handleChange: (event, value) => {
    dispatch(changeTabIndex(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TabManager));
