import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './css/button.css';
import { toggleDeleteModal } from '../UserDetailPage/actions';

type PropsType = {
  selection: Array<number>,
  onClick: Event => void,
};

function DeleteButton(props: PropsType): React.Node {
  const { selection, onClick } = props;
  return (
    <Button
      variant="contained"
      color="secondary"
      className={styles.delete}
      onClick={onClick}
      disabled={selection.length < 1}
    >
      <DeleteIcon className={styles.buttonIcon} />
      削除
    </Button>
  );
}

const mapStateToProps = (state: StateType) => ({
  selection: state.userListPage.selection,
});

const mapDispatchToProp = dispatch => ({
  onClick: () => {
    dispatch(toggleDeleteModal(true, 'kids'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(DeleteButton);
