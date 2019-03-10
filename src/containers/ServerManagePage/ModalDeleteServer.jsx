// @flow
import { connect } from 'react-redux';
import DeleteModal from '../../components/DeleteModal';
import { toggleModal } from '../Common/actions';
import * as Types from '../../constants/ActionTypes';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = (state: StateType, { dispatch }) => ({
  title: 'サーバーの削除',
  isOpen: state.serverManagePage.isOpenDeleteModal,
  onClickCancel: () => {
    dispatch(toggleModal(false, 'servers'));
  },
  onClickDelete: () => {
    const { selection } = state.serverManagePage;
    dispatch({
      type: Types.HTTP_DELETE_SERVERS,
      payload: selection,
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(DeleteModal);
