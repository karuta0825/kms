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
import { changeTabPosition } from './actions';
import TabLicense from './TabLicense';
import TabClient from './TabClient';
import TabFenics from './TabFenics';
import TabBuisv from './TabBuisv';
import TabHistory from './TabHistory';
import TabPartner from './TabPartner';

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
    height: 'calc(100% - 52px)',
    backgroundColor: theme.palette.background.paper,
    marginTop: '3px',
  },
  tabTitle: {
    minWidth: '110px',
  },
});

type PropsType = {
  classes: Object,
  value: string,
  hasFenics: boolean,
  hasBusiv: boolean,
  hasMobile: boolean,
  dispatch: () => void,
};

function TabManager(props: PropsType): React.Node {
  const {
    classes,
    value,
    hasFenics,
    hasBusiv,
    hasMobile,
    dispatch,
  } = props;

  const position = value;
  if (
    (!hasFenics && value === 'fenics') ||
    (!hasBusiv && value === 'busivs') ||
    (!hasMobile && value === 'mobile')
  ) {
    dispatch(changeTabPosition('baseInfo'));
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={(event, tabName) => {
          dispatch(changeTabPosition(tabName));
        }}
        scrollable
        scrollButtons="auto"
      >
        <Tab
          label="システム情報"
          className={classes.tabTitle}
          value="baseInfo"
        />
        <Tab
          label="拠点情報"
          className={classes.tabTitle}
          value="customers"
        />
        <Tab
          label="ライセンス"
          className={classes.tabTitle}
          value="license"
        />
        <Tab
          label="クライアント(Citrix数)"
          className={classes.tabTitle}
          value="clients"
        />
        {hasFenics && (
          <Tab
            label="Fenics"
            className={classes.tabTitle}
            value="fenics"
          />
        )}
        {hasBusiv && (
          <Tab
            label="ビジV"
            className={classes.tabTitle}
            value="busivs"
          />
        )}
        <Tab
          label="パートナ"
          className={classes.tabTitle}
          value="partners"
        />
        {hasMobile && (
          <Tab
            label="モバイル"
            className={classes.tabTitle}
            value="mobiles"
          />
        )}
        <Tab
          label="履歴"
          className={classes.tabTitle}
          value="historys"
        />
      </Tabs>
      {position === 'baseInfo' && <TabSystem />}
      {position === 'customers' && <TabCustomer />}
      {position === 'license' && <TabLicense />}
      {position === 'clients' && <TabClient />}
      {position === 'fenics' && <TabFenics />}
      {position === 'busivs' && <TabBuisv />}
      {position === 'partners' && <TabPartner />}
      {position === 'mobiles' && (
        <TabContainer>Item Eigth</TabContainer>
      )}
      {position === 'historys' && <TabHistory />}
    </Paper>
  );
}

const mapStateToProps = (state: StateType) => ({
  value: state.userDetailPage.tabPosition,
  hasBusiv: state.data.baseInfo.has_busiv,
  hasFenics: state.data.baseInfo.has_fenics,
  hasMobile: state.data.baseInfo.has_mobile,
});

export default connect(mapStateToProps)(
  withStyles(styles)(TabManager)
);
