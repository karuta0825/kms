// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import styles from './css/filter.css';
import { filterSystemType } from './actions';

type PropsType = {
  classes: Object,
  isOnpre: boolean,
  isCloud: boolean,
  isKensyo: boolean,
  isDemo: boolean,
  onClickOnpre: (Event) => void,
  onClickCloud: (Event) => void,
  onClickKensyo: (Event) => void,
  onClickDemo: (Event) => void,
};

function FilterSystemtype(props: PropsType): React.Node {
  const {
    classes,
    isOnpre,
    isCloud,
    isKensyo,
    isDemo,
    onClickOnpre,
    onClickCloud,
    onClickKensyo,
    onClickDemo,
  } = props;
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
        onClick={onClickOnpre}
      >
        <Checkbox
          checked={isOnpre}
          disableRipple
        />
        <ListItemText primary="オンプレ" />
      </ListItem>

      <ListItem
        dense
        button
        className={classes.listItem}
        onClick={onClickCloud}
      >
        <Checkbox
          checked={isCloud}
          disableRipple
        />
        <ListItemText primary="クラウド" />
      </ListItem>

      <ListItem
        dense
        button
        className={classes.listItem}
        onClick={onClickDemo}
      >
        <Checkbox
          checked={isDemo}
          disableRipple
        />
        <ListItemText primary="デモ" />
      </ListItem>

      <ListItem
        dense
        button
        className={classes.listItem}
        onClick={onClickKensyo}
      >
        <Checkbox
          checked={isKensyo}
          disableRipple
        />
        <ListItemText primary="検証" />
      </ListItem>

    </List>
  );
}

const mapStateToProps = state => ({
  isOnpre: state.userListPage.filter.isOnpre,
  isCloud: state.userListPage.filter.isCloud,
  isKensyo: state.userListPage.filter.isKensyo,
  isDemo: state.userListPage.filter.isDemo,
});

const mapDispatchToProps = dispatch => ({
  onClickOnpre: () => {
    dispatch(filterSystemType('onpre'));
  },
  onClickCloud: () => {
    dispatch(filterSystemType('cloud'));
  },
  onClickKensyo: () => {
    dispatch(filterSystemType('kensyo'));
  },
  onClickDemo: () => {
    dispatch(filterSystemType('demo'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles({})(FilterSystemtype));
