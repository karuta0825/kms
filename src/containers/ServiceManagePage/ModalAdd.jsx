// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core';
import InputSalesId from './InputSalesId';
import { toggleModal } from '../Common/actions';
import InputServiceId from './InputServiceId';
import InputServiceName from './InputServiceName';

type PropsType = {
  title: string,
  isOpen: boolean,
  onClickSave: Event => void,
  onClickCancel: Event => void,
};

function ModalAdd(props: PropsType): React.Node {
  const { title, isOpen, onClickCancel, onClickSave } = props;
  return (
    <Dialog
      open={isOpen}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <InputServiceId />
        <InputServiceName />
        <InputSalesId />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClickCancel} color="primary">
          キャンセル
        </Button>
        <Button onClick={onClickSave} color="primary">
          作成
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = (state: StateType) => ({
  title: 'サービス作成',
  isOpen: state.serviceManagePage.isOpenNewModal,
});

const mapDispatchToProps = dispatch => ({
  onClickSave: () => {},
  onClickCancel: () => {
    dispatch(toggleModal(false, 'create-service'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalAdd);
