// @flow
import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import RouterIcon from '@material-ui/icons/Router';
import styles from './css/filter.css';

type PropsType = {
  classes: Object,
};

function FilterNetwork(props: PropsType): React.Node {
  const { classes } = props;
  return (
    <List>
      <ListSubheader className={styles.subheader}>
        <RouterIcon />
        <span className={styles.subheaderText}>ネットワーク</span>
      </ListSubheader>
      <ListItem
        role={undefined}
        dense
        button
        className={classes.listItem}
      >
        <Checkbox
          checked
          disableRipple
        />
        <ListItemText primary="Fenics" />
      </ListItem>

      <ListItem
        role={undefined}
        dense
        button
        className={classes.listItem}
      >
        <Checkbox
          checked
          disableRipple
        />
        <ListItemText primary="ビジネスVPN" />
      </ListItem>


    </List>
  );
}

export default withStyles({})(FilterNetwork);
