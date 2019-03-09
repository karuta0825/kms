import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import ButtonDelete from './ButtonDelete';
import ButtonFilter from './ButtonFilter';
import ButtonDownload from './ButtonDownload';
import FilterInputText from './FilterInputText';
import Filter from './Filter';
import styles from './css/table.css';
import KidTable from './KidTable';
import ModalDeleteKid from './ModalDeleteKid';

type PropsType = {};

class UserListPage extends React.Component<PropsType> {
  componentWillMount() {
    console.log('will mount');
  }

  render(): React.Node {
    return (
      <div className={styles.wrapper}>
        <div className={styles.action}>
          <FilterInputText />
          <ButtonDownload />
          <ButtonDelete />
          <ButtonFilter />
        </div>
        <Paper className={styles.table}>
          <KidTable />
        </Paper>
        <Filter />
        <ModalDeleteKid />
      </div>
    );
  }
}

export default UserListPage;
