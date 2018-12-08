// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import RouterIcon from '@material-ui/icons/Router';
import styles from './css/filter.css';
import { filterNetwork } from './actions';

type PropsType = {
  classes: Object,
  isFenics: boolean,
  isBusiv: boolean,
  onClickFenics: (Event) => void,
  onClickBusiv: (Event) => void,
};

function FilterNetwork(props: PropsType): React.Node {
  const {
    classes,
    isFenics,
    isBusiv,
    onClickFenics,
    onClickBusiv,
  } = props;
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
        onClick={onClickFenics}
      >
        <Checkbox
          checked={isFenics}
          disableRipple
        />
        <ListItemText primary="Fenics" />
      </ListItem>

      <ListItem
        role={undefined}
        dense
        button
        className={classes.listItem}
        onClick={onClickBusiv}
      >
        <Checkbox
          checked={isBusiv}
          disableRipple
        />
        <ListItemText primary="ビジネスVPN" />
      </ListItem>


    </List>
  );
}

const mapStateToProps = state => ({
  isFenics: state.userListPage.filter.hasFenics,
  isBusiv: state.userListPage.filter.hasBusiv,
});

const mapDispatchToProps = dispatch => ({
  onClickFenics: () => {
    dispatch(filterNetwork('fenics'));
  },
  onClickBusiv: () => {
    dispatch(filterNetwork('busiv'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles({})(FilterNetwork));
