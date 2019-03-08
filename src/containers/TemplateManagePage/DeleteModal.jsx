// @flow
import { connect } from 'react-redux';
import DeleteModal from '../../components/DeleteModal';
import { toggleModal } from '../Common/actions';
import * as Types from '../../constants/ActionTypes';

const mapStateToProps = (state: StateType) => state;

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = (state: StateType, { dispatch }) => ({
  title: 'メモテンプレートの削除',
  isOpen: state.templateManagePage.isOpenDeleteModal,
  onClickCancel: () => {
    dispatch(toggleModal(false, 'memoTemplate'));
  },
  onClickDelete: () => {
    const { id } = state.templateManagePage.inputValues;
    dispatch({
      type: Types.HTTP_DELETE_MEMOTEMPLATES,
      payload: id,
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(DeleteModal);
