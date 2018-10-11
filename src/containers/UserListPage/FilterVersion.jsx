// @flow
import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import Devices from '@material-ui/icons/Devices';
import styles from './css/filter.css';

type PropsType = {
  classes: Object,
};

function FilterVersion(props: PropsType): React.Node {
  const { classes } = props;
  return (
    <List>
      <ListSubheader className={styles.subheader}>
        <Devices />
        <span className={styles.subheaderText}>バージョン</span>
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
        <ListItemText primary="ES" />
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
        <ListItemText primary="LM" />
      </ListItem>


    </List>
  );
}

export default withStyles({})(FilterVersion);
