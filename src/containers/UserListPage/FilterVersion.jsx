// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import Devices from '@material-ui/icons/Devices';
import styles from './css/filter.css';
import { filterVersion } from './actions';

type PropsType = {
  classes: Object,
  isES: boolean,
  isLM: boolean,
  onClickES: (Event) => void,
  onClickLM: (Event) => void,
};

function FilterVersion(props: PropsType): React.Node {
  const {
    classes,
    isES,
    isLM,
    onClickES,
    onClickLM,
  } = props;
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
        onClick={onClickES}
      >
        <Checkbox
          checked={isES}
          disableRipple
        />
        <ListItemText primary="ES" />
      </ListItem>

      <ListItem
        role={undefined}
        dense
        button
        className={classes.listItem}
        onClick={onClickLM}
      >
        <Checkbox
          checked={isLM}
          disableRipple
        />
        <ListItemText primary="LM" />
      </ListItem>
    </List>
  );
}

const mapStateToProps = state => ({
  isES: state.userListPage.filter.isES,
  isLM: state.userListPage.filter.isLM,
});

const mapDispacthToState = dispatch => ({
  onClickES: () => {
    dispatch(filterVersion('ES'));
  },
  onClickLM: () => {
    dispatch(filterVersion('LM'));
  },
});


export default connect(
  mapStateToProps,
  mapDispacthToState,
)(withStyles({})(FilterVersion));
