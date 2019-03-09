// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import '../../UserListPage/css/button.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import styles from './css/index.css';
import listStyles from './css/baseList.css';
import { selectBase } from './actions';

type PropsType = {
  data: Array<CustomerType>,
  selectedIndex: number,
  onClick: number => void,
};

function getBusivUsedBases(
  busivs: Array<BusivType>,
  customers: Array<CustomerType>
): Array<BusivType> {
  return customers
    .filter(customer => customer.has_busiv === 1)
    .map(base =>
      customers.find(customer => customer.base_id === base.base_id)
    );
}

function setClassName(selectedIndex: number, idx: number): string {
  if (selectedIndex === idx) {
    return listStyles.selectedItem;
  }
  return listStyles.item;
}

function BaseList(props: PropsType): React.Node {
  const { data, selectedIndex, onClick } = props;
  return (
    <div className={styles.list}>
      <div className={listStyles.header}>拠点リスト</div>
      <List style={{ padding: 0 }}>
        {data &&
          data.map((base, idx) => (
            <ListItem
              className={setClassName(selectedIndex, idx)}
              button
              key={base.base_id}
              onClick={() => {
                onClick(idx);
              }}
            >
              {base.base_name || `拠点${idx + 1}`}
            </ListItem>
          ))}
      </List>
    </div>
  );
}

const mapStateToProps = (state: StateType) => ({
  data: getBusivUsedBases(state.data.busivs, state.data.customers),
  selectedIndex: state.userDetailPage.busivTab.selectedIndex,
});

const mapDispatchToProps = dispatch => ({
  onClick: idx => {
    dispatch(selectBase(idx));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseList);
