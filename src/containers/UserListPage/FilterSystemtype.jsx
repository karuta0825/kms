// @flow
import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import styles from './css/filter.css';

type PropsType = {
  classes: Object,
};


function FilterSystemtype(props: PropsType): React.Node {
  const { classes } = props;
  return (
    <List>
      <ListSubheader className={styles.subheader}>
        <CloudQueueIcon className={styles.subheaderIcon} />
        <span className={styles.subheaderText}>
          システム環境
        </span>
      </ListSubheader>

      <ListItem
        dense
        button
        className={classes.listItem}
      >
        <Checkbox
          checked
          disableRipple
        />
        <ListItemText primary="オンプレ" />
      </ListItem>

      <ListItem
        dense
        button
        className={classes.listItem}
      >
        <Checkbox
          checked
          disableRipple
        />
        <ListItemText primary="クラウド" />
      </ListItem>

      <ListItem
        dense
        button
        className={classes.listItem}
      >
        <Checkbox
          checked
          disableRipple
        />
        <ListItemText primary="デモ" />
      </ListItem>

      <ListItem
        dense
        button
        className={classes.listItem}
      >
        <Checkbox
          checked
          disableRipple
        />
        <ListItemText primary="検証" />
      </ListItem>

    </List>
  );
}

export default withStyles({})(FilterSystemtype);
