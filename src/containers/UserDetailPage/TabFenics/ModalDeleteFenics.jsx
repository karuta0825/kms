// @flow
import { connect } from 'react-redux';
import DeleteModal from '../../../components/DeleteModal';
import { deleteFenics } from './actions';
import { toggleDeleteModal } from '../actions';

const mapStateToProps = (state: StateType) => state;

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = (state, { dispatch }) => ({
  title: 'Fenics削除',
  isOpen: state.userDetailPage.fenicsTab.isOpenDeleteModal,
  onClickDelete: () => {
    const kids_id = state.data.baseInfo.id;
    const { selection } = state.userDetailPage.fenicsTab;
    dispatch(deleteFenics(kids_id, selection));
  },
  onClickCancel: () => {
    dispatch(toggleDeleteModal(false, 'fenics'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(DeleteModal);
