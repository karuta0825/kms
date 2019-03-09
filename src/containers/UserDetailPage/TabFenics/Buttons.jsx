// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { toggleEditMode, toggleDeleteModal } from '../actions';
import { putFenics, toggleDownloadModal } from './actions';

type PropsType = {
  isEdit: boolean,
  selection: Array<string>,
  onClickSave: Event => void,
  onClickCancel: Event => void,
  onClickDelete: Event => void,
  onClickEdit: Event => void,
  onClickDownload: Event => void,
};

function Buttons(props: PropsType): React.Node {
  const {
    isEdit,
    selection,
    onClickEdit,
    onClickCancel,
    onClickSave,
    onClickDelete,
    onClickDownload,
  } = props;
  return (
    <React.Fragment>
      {isEdit && (
        <Button variant="contained" onClick={onClickSave}>
          保存
        </Button>
      )}
      {isEdit && (
        <Button variant="contained" onClick={onClickCancel}>
          キャンセル
        </Button>
      )}
      {!isEdit && (
        <Button
          variant="contained"
          color="secondary"
          onClick={onClickEdit}
        >
          編集
        </Button>
      )}

      {!isEdit && (
        <Button
          variant="contained"
          onClick={onClickDelete}
          disabled={selection.length < 1}
        >
          削除
        </Button>
      )}

      {!isEdit && (
        <Button variant="contained" onClick={onClickDownload}>
          ダウンロード
        </Button>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = (state: StateType, { dispatch }) => ({
  isEdit: state.userDetailPage.fenicsTab.isEdit,
  selection: state.userDetailPage.fenicsTab.selection,
  onClickSave: () => {
    const kids_id = state.data.baseInfo.id;
    const { rowChanges } = state.userDetailPage.fenicsTab;
    dispatch(putFenics(kids_id, rowChanges));
  },
  onClickCancel: () => {
    dispatch(toggleEditMode(false, 'FENICS'));
  },
  onClickEdit: () => {
    dispatch(toggleEditMode(true, 'FENICS'));
  },
  onClickDelete: () => {
    dispatch(toggleDeleteModal(true, 'fenics'));
  },
  onClickDownload: () => {
    dispatch(toggleDownloadModal(true));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Buttons);
