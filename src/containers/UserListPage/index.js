import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import KidTable from './KidTable';
import ButtonDelete from './ButtonDelete';
import ButtonFilter from './ButtonFilter';
import ButtonDownload from './ButtonDownload';
import FilterInputText from './FilterInputText';
import styles from './css/table.css';

type PropsType = {

};

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
          <KidTable history={this.props.p}/>
        </Paper>
        <div className={styles.filter}></div>
      </div>
    );
  }
}


export default UserListPage;
