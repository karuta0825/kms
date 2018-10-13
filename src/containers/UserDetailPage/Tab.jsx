// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { changeTabIndex } from './actions';

function TabContainer({ children } = {
  children: React.Node,
}): React.Node {
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
    height: 'calc(100% - 50px)',
    backgroundColor: theme.palette.background.paper,
    marginTop: '8px',
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
          <Tab label="顧客情報" />
          <Tab label="ライセンス" />
          <Tab label="Fenics" />
          <Tab label="ビジV" />
          <Tab label="パートナ" />
          <Tab label="モバイル" />
          <Tab label="履歴" />
        </Tabs>
      {value === 0 && <TabContainer>Item One</TabContainer>}
      {value === 1 && <TabContainer>Item Two</TabContainer>}
      {value === 2 && <TabContainer>Item Three</TabContainer>}
      {value === 3 && <TabContainer>Item Four</TabContainer>}
      {value === 4 && <TabContainer>Item Five</TabContainer>}
      {value === 5 && <TabContainer>Item Six</TabContainer>}
      {value === 6 && <TabContainer>Item Seven</TabContainer>}
      {value === 7 && <TabContainer>Item Eigth</TabContainer>}
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
  mapDispatchToProps,
)(withStyles(styles)(TabManager));
