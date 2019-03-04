// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import DeleteModal from '../../components/DeleteModal';
import { toggleModal } from '../Common/actions';

const mapStateToProps = (state: StateType) => ({
  title: 'サービスの削除',
  isOpen: state.serviceManagePage.isOpenDeleteModal,
});

const mapDispatchToProps = dispatch => ({
  onClickCancel: () => {
    dispatch(toggleModal(false, 'service'));
  },
  onClickDelete: () => {
    console.log('deleted');
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteModal);
