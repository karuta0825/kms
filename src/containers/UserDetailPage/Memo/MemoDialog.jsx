// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Button, DialogActions } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputTitle from './InputTitle';
import SelectTemplate from './SelectTemplate';
import InputMessage from './InputMessage';
import RemainingChar from './RemainingChar';
import SelectPriority from './SelectPriority';
import { toggleModal } from '../../Common/actions';

type PropsType = {
  title: string,
  isOpen: boolean,
  isNewMemo: boolean,
  onClickSave: Event => void,
  onClickCancel: Event => void,
  onClickUpdate: Event => void,
  onClickDelete: Event => void,
};

function MemoDialog(props: PropsType): React.Node {
  const {
    title,
    isOpen,
    isNewMemo,
    onClickCancel,
    onClickSave,
    onClickUpdate,
    onClickDelete,
  } = props;
  return (
    <Dialog
      open={isOpen}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth="md"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <InputTitle />
        <SelectPriority />
        <SelectTemplate />
        <InputMessage />
        <RemainingChar />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClickCancel} color="primary">
          キャンセル
        </Button>
        {isNewMemo && (
          <Button onClick={onClickSave} color="primary">
            作成
          </Button>
        )}
        {!isNewMemo && (
          <Button onClick={onClickDelete} color="primary">
            削除
          </Button>
        )}
        {!isNewMemo && (
          <Button onClick={onClickUpdate} color="primary">
            更新
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = (state: StateType) => ({
  title: 'メモ',
  isNewMemo: state.userDetailPage.memo.isNew,
  isOpen: state.userDetailPage.memo.isModalOpen,
});

const mapDispatchToProps = dispatch => ({
  onClickSave: () => {},
  onClickCancel: () => {
    dispatch(toggleModal(false, 'memo'));
  },
  onClickUpdate: () => {},
  onClickDelete: () => {},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemoDialog);
