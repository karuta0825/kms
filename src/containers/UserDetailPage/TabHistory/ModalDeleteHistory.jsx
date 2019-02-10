// @flow
import { connect } from 'react-redux';
import DeleteModal from '../../../components/DeleteModal';
import { toggleDeleteModal } from './actions';

const mapStateToProps = (state: StateType) => ({
  title: '履歴の削除',
  isOpen: state.userDetailPage.historyTab.isOpenDeleteModal,
});

const mapDispatchToProps = dispatch => ({
  onClickDelete: () => {},
  onClickCancel: () => {
    dispatch(toggleDeleteModal(false));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteModal);
