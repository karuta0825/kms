// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import '../../UserListPage/css/button.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Button } from '@material-ui/core';
import styles from './css/index.css';
import listStyles from './css/customerList.css';
import { selectBase, toggleNewAddMode } from './actions';

type PropsType = {
  data: Array<CustomerType>,
  selectedIndex: number,
  onClick: number => void,
  onClickAddBase: () => void,
};

function setClassName(
  selectedIndex: number,
  idx: number
): string {
  if (selectedIndex === idx) {
    return listStyles.selectedItem;
  }
  return listStyles.item;
}

function CustomerList(props: PropsType): React.Node {
  const { data, selectedIndex, onClick, onClickAddBase } = props;
  return (
    <div className={styles.customerList}>
      <div className={listStyles.action}>
        <Button variant="outlined" onClick={onClickAddBase}>
          新規追加
        </Button>
      </div>
      <List style={{ padding: 0 }}>
        {data &&
          data.map((customer, idx) => (
            <ListItem
              className={setClassName(selectedIndex, idx)}
              button
              key={customer.base_id}
              onClick={() => {
                onClick(idx);
              }}
            >
              {customer.base_name || `拠点${idx + 1}`}
            </ListItem>
          ))}
      </List>
    </div>
  );
}

const mapStateToProps = (state: StateType) => ({
  data: state.data.customers,
  selectedIndex: state.userDetailPage.customerTab.selectedIndex,
});

const mapDispatchToProps = dispatch => ({
  onClick: idx => {
    dispatch(selectBase(idx));
  },
  onClickAddBase: () => {
    dispatch(toggleNewAddMode(true));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerList);
