// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { toggleDialog } from './actions';

type PropsType = {
  isOpen: boolean,
  title: string,
  text: string,
  handleClose: (Event) => void,
};

function DialogFinish(props: PropsType): React.Node {
  const {
    isOpen,
    title,
    text,
    handleClose,
  } = props;
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          閉じる
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProp = state => ({
  isOpen: state.userMakePage.showDialog,
  title: 'ユーザー作成結果',
  text: state.userMakePage.makedUserKID,
});

const mapDisPatchToProps = dispatch => ({
  handleClose: () => {
    dispatch(toggleDialog(false));
  },
});

export default connect(
  mapStateToProp,
  mapDisPatchToProps,
)(DialogFinish);
