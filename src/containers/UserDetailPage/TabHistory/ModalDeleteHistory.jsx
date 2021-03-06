// @flow
import { connect } from 'react-redux';
import DeleteModal from '../../../components/DeleteModal';
import * as Types from '../../../constants/ActionTypes';
import { toggleDeleteModal } from '../actions';

const mapStateToProps = (state: StateType) => state;

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = (state, { dispatch }) => ({
  title: '履歴の削除',
  isOpen: state.userDetailPage.historyTab.isOpenDeleteModal,
  onClickDelete: () => {
    const { id } = state.data.baseInfo;
    const { selection } = state.userDetailPage.historyTab;
    dispatch({
      type: Types.HTTP_DELETE_HISTORYS,
      payload: { kids_id: id, selection },
    });
  },
  onClickCancel: () => {
    dispatch(toggleDeleteModal(false, 'historys'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(DeleteModal);
