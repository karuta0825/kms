// @flow
import { connect } from 'react-redux';
import DeleteModal from '../../components/DeleteModal';
import { toggleDeleteModal } from '../UserDetailPage/actions';
import { deleteKids } from './actions';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = (state: StateType, { dispatch }) => ({
  title: 'KID削除',
  isOpen: state.userListPage.isOpenDeleteModal,
  onClickDelete: () => {
    const { selection } = state.userListPage;
    dispatch(deleteKids(selection));
  },
  onClickCancel: () => {
    dispatch(toggleDeleteModal(false, 'kids'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(DeleteModal);
