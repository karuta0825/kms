// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import styles from './css/listHeader.css';
import { toggleNewAddMode } from './actions';

type PropsType = {
  onClickAddTemplate: Event => void,
};

function ListHeader(props: PropsType): React.Node {
  const { onClickAddTemplate } = props;
  return (
    <React.Fragment>
      <Button size="small" className={styles.backBtn}>
        <Link to="/setting" className={styles.backBtnLink}>
          一覧に戻る
        </Link>
      </Button>
      <Button onClick={onClickAddTemplate}>新規追加</Button>
    </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => ({
  onClickAddTemplate: () => {
    dispatch(toggleNewAddMode(true));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(ListHeader);
