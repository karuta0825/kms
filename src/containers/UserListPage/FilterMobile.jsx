// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import styles from './css/filter.css';
import { filterMobile } from './actions';

type PropsType = {
  classes: Object,
  hasMobile: boolean,
  onClickMobile: (Event) => void;
};

function FilterMobile(props: PropsType): React.Node {
  const {
    classes,
    hasMobile,
    onClickMobile,
  } = props;
  return (
    <List>
      <ListSubheader className={styles.subheader}>
        <TabletMacIcon />
        <span className={styles.subheaderText}>モバイル</span>
      </ListSubheader>
      <ListItem
        role={undefined}
        dense
        button
        className={classes.listItem}
        onClick={onClickMobile}
      >
        <Checkbox
          checked={hasMobile}
          disableRipple
        />
        <ListItemText primary="あり" />
      </ListItem>

    </List>
  );
}

const mapStateToProps = state => ({
  hasMobile: state.userListPage.filter.hasMobile,
});

const mapDispatchToProps = dispatch => ({
  onClickMobile: () => {
    dispatch(filterMobile());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles({})(FilterMobile));
