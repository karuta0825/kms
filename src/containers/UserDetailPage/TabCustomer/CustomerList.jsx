// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import '../../UserListPage/css/button.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import styles from './css/index.css';
import listStyles from './css/customerList.css';
import { selectBase } from './actions';

type PropsType = {
  data: Array<CustomerType>,
};

function CustomerList(props: PropsType): React.Node {
  const { data, onClick } = props;
  return (
    <div className={styles.customerList}>
      <div className={listStyles.action}>header</div>
      <List>
        {data &&
          data.map((customer, idx) => (
            <ListItem
              className={listStyles.item}
              button
              key={customer.base_id}
              onClick={() => {
                onClick(idx);
              }}
            >
              {customer.base_name}
            </ListItem>
          ))}
      </List>
    </div>
  );
}

const mapStateToProps = state => ({
  data: state.data.customers,
});

const mapDispatchToProps = dispatch => ({
  onClick: idx => {
    dispatch(selectBase(idx));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerList);
