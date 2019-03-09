// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Button, DialogActions } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { toggleDownloadModal, execDownload } from './actions';
import DownloadIni from './DownloadIni';

type PropsType = {
  title: string,
  isOpen: boolean,
  onClickClose: Event => void,
  onClickDownload: Event => void,
};

function DonwloadModal(props: PropsType): React.Node {
  const { title, isOpen, onClickClose, onClickDownload } = props;
  return (
    <Dialog
      fullWidth
      open={isOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DownloadIni />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClickClose} color="primary">
          閉じる
        </Button>
        <Button onClick={onClickDownload} color="primary">
          実行
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = state => ({
  title: 'ファイルダウンロード',
  isOpen: state.userDetailPage.fenicsTab.isOpenDownloadModal,
});

const mapDispatchToProps = dispatch => ({
  onClickClose: () => {
    dispatch(toggleDownloadModal(false));
  },
  onClickDownload: () => {
    dispatch(execDownload(true));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonwloadModal);
