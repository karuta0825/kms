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
    height: 'calc(100% - 60px)',
    backgroundColor: theme.palette.background.paper,
    marginTop: '3px',
  },
});

type PropsType = {
  classes: Object,
  value: number,
  handleChange: (any, number) => void,
};

class TabManager extends React.Component<PropsType> {
  render(): React.Node {
    const { classes, value, handleChange } = this.props;
    return (
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          scrollable
          scrollButtons="auto"
        >
          <Tab label="システム情報" />
          <Tab label="拠点情報" />
          <Tab label="ライセンス" />
          <Tab label="クライアント(Citrix数)" />
          <Tab label="Fenics" />
          <Tab label="ビジV" />
          <Tab label="パートナ" />
          <Tab label="モバイル" />
          <Tab label="履歴" />
        </Tabs>
        {value === 0 && <TabSystem />}
        {value === 1 && <TabCustomer />}
        {value === 2 && <TabLicense />}
        {value === 3 && <TabClient />}
        {value === 4 && <TabFenics />}
        {value === 5 && <TabContainer>Item Six</TabContainer>}
        {value === 6 && <TabContainer>Item Seven</TabContainer>}
        {value === 7 && <TabContainer>Item Eigth</TabContainer>}
        {value === 8 && <TabContainer>Item Eigth</TabContainer>}
      </Paper>
    );
  }
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
