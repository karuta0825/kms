// @flow
import { connect } from 'react-redux';
import DeleteModal from '../../components/DeleteModal';
import { toggleModal } from '../Common/actions';
import * as Types from '../../constants/ActionTypes';

const mapStateToProps = (state: StateType) => state;

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = (state, { dispatch }) => ({
  title: 'サービスの削除',
  isOpen: state.serviceManagePage.isOpenDeleteModal,
  onClickCancel: () => {
    dispatch(toggleModal(false, 'service'));
  },
  onClickDelete: () => {
    const { selection } = state.serviceManagePage;
    dispatch({
      type: Types.HTTP_DELETE,
      payload: {
        key: 'services',
        options: {
          endpoint: `/api/v1/services`,
          body: selection,
        },
      },
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(DeleteModal);
