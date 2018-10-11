import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer({ children } = {
  children: React.Node,
}): React.Node {
  return (
    <Typography
      component="div"
      style={{
        padding: 8 * 3,
        height: '500px',
        backgroundColor: 'red',
      }}
    >
      {children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

type PropsType = {
  classes: Object,
  value: number,
  handleChange: (any, number) => void,
};

class ScrollableTabsButtonPrevent extends React.Component<PropsType> {
  render(): React.Node {
    const { classes, value, handleChange } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
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
            <Tab label="パートナ情報" />
            <Tab label="モバイル情報" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
        {value === 4 && <TabContainer>Item Five</TabContainer>}
        {value === 5 && <TabContainer>Item Six</TabContainer>}
        {value === 6 && <TabContainer>Item Seven</TabContainer>}
      </div>
    );
  }
}

export default withStyles(styles)(ScrollableTabsButtonPrevent);
