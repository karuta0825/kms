// @flow
import { connect } from 'react-redux';
import DeleteModal from '../../components/DeleteModal';
import { changeDeletingRowIds } from './actions';

const mapStateToProps = (state: StateType) => ({
  title: 'サービスの削除',
  isOpen: state.serviceManagePage.deletingRowIds.length > 0,
});

const mapDispatchToProps = dispatch => ({
  onClickCancel: () => {
    dispatch(changeDeletingRowIds([]));
  },
  onClickDelete: () => {
    console.log('deleted');
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteModal);
