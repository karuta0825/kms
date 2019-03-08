// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, DialogActions } from '@material-ui/core';
import { toggleModal } from './actions';

type PropsType = {
  title: string,
  isOpen: boolean,
  msg: string,
  onClickClose: Event => void,
};

function AlertModal(props: PropsType): React.Node {
  const { title, isOpen, msg, onClickClose } = props;
  return (
    <Dialog open={isOpen} maxWidth="md">
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <p>{msg}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClickClose} color="primary">
          閉じる
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = (state: StateType) => ({
  title: state.dialog.title,
  isOpen: state.dialog.isOpen,
  msg: state.dialog.msg,
});

const mapDispatchToProps = dispatch => ({
  onClickClose: () => {
    dispatch(toggleModal(false, 'dialog'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertModal);
