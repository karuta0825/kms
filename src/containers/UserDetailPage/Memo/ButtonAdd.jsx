// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import styles from './css/memo.css';
import { createMemo } from './actions';

type PropsType = {
  onClick: Event => void,
};

function ButtonAdd(props: PropsType): React.Node {
  const { onClick } = props;
  return (
    <Button
      variant="fab"
      mini
      color="secondary"
      aria-label="Add"
      className={styles.addBtn}
      onClick={onClick}
    >
      <AddIcon />
    </Button>
  );
}

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(createMemo());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(ButtonAdd);
