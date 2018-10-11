import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './css/button.css';

type PropsType = {
  onClick: (Event) => void
};

function DeleteButton(props: PropsType): React.Node {
  const { onClick } = props;
  return (
    <Button
      variant="contained"
      color="secondary"
      size="medium"
      className={styles.delete}
      onClick={onClick}
    >
      <DeleteIcon className={styles.buttonIcon} />
      削除
    </Button>
  );
}

const mapDispatchToProp = dispatch => ({
  onClick: () => {
    console.log('clicked delete btn');
  },
});

export default connect(
  null,
  mapDispatchToProp,
)(DeleteButton);
