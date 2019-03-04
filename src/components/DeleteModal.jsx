// @flow
import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, DialogActions } from '@material-ui/core';

type PropsType = {
  title: string,
  isOpen: boolean,
  body: React.Node,
  onClickCancel: Event => void,
  onClickDelete: Event => void,
};

export default function DeleteModal(
  props: PropsType
): React.Node {
  const {
    title,
    isOpen,
    body,
    onClickCancel,
    onClickDelete,
  } = props;
  return (
    <Dialog open={isOpen} maxWidth="xs">
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        {body}
        {!body && <span>削除してもよろしいですか?</span>}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClickCancel} color="primary">
          キャンセル
        </Button>
        <Button onClick={onClickDelete} color="primary">
          削除
        </Button>
      </DialogActions>
    </Dialog>
  );
}
