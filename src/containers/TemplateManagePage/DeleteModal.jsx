// @flow
import { connect } from 'react-redux';
import DeleteModal from '../../components/DeleteModal';
import { toggleDeleteModal } from './actions';
import { DELETE_MEMO_TEMPLATE } from '../../constants/ActionTypes';

const mapStateToProps = (state: StateType) => ({
  title: 'メモテンプレートの削除',
  isOpen: state.templateManagePage.isOpenDeleteModal,
});

const mapDispatchToProps = dispatch => ({
  onClickCancel: () => {
    dispatch(toggleDeleteModal(false));
  },
  onClickDelete: () => {
    dispatch({ type: DELETE_MEMO_TEMPLATE });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteModal);
