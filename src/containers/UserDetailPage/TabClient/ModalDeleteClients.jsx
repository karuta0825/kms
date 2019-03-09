// @flow
import { connect } from 'react-redux';
import DeleteModal from '../../../components/DeleteModal';
import { deleteClient } from './actions';
import { toggleDeleteModal } from '../actions';

const mapStateToProps = (state: StateType) => state;

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = (state, { dispatch }) => ({
  title: 'クライアント削除',
  isOpen: state.userDetailPage.clientTab.isOpenDeleteModal,
  onClickDelete: () => {
    const kids_id = state.data.baseInfo.id;
    const { selection } = state.userDetailPage.clientTab;
    dispatch(deleteClient(kids_id, selection));
  },
  onClickCancel: () => {
    dispatch(toggleDeleteModal(false, 'clients'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(DeleteModal);
