// @flow
import { connect } from 'react-redux';
import DeleteModal from '../../components/DeleteModal';
import { toggleModal } from '../Common/actions';
import { DELETE_MEMO_TEMPLATE } from '../../constants/ActionTypes';

const mapStateToProps = (state: StateType) => ({
  title: 'メモテンプレートの削除',
  isOpen: state.templateManagePage.isOpenDeleteModal,
});

const mapDispatchToProps = dispatch => ({
  onClickCancel: () => {
    dispatch(toggleModal(false, 'memoTemplate'));
  },
  onClickDelete: () => {
    dispatch({ type: DELETE_MEMO_TEMPLATE });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteModal);
