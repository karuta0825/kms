// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { toggleEditMode, toggleDeleteModal } from '../actions';
import { putClient } from './actions';

type PropsType = {
  isEdit: boolean,
  selection: Array<number>,
  onClickSave: Event => void,
  onClickCancel: Event => void,
  onClickEdit: Event => void,
  onClickDelete: Event => void,
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
  isEdit: state.userDetailPage.clientTab.isEdit,
  selection: state.userDetailPage.clientTab.selection,
  onClickCancel: () => {
    dispatch(toggleEditMode(false, 'CLIENT'));
  },
  onClickEdit: () => {
    dispatch(toggleEditMode(true, 'CLIENT'));
  },
  onClickSave: () => {
    const kids_id = state.data.baseInfo.id;
    const { rowChanges } = state.userDetailPage.clientTab;
    dispatch(putClient(kids_id, rowChanges));
  },
  onClickDelete: () => {
    dispatch(toggleDeleteModal(true, 'clients'));
  },
  onClickDownload: () => {},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Buttons);
