// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { toggleEditMode } from '../actions';

type PropsType = {
  isEdit: boolean,
  onClickSave: Event => void,
  onClickCancel: Event => void,
  onClickEdit: Event => void,
};

function Buttons(props: PropsType): React.Node {
  const {
    isEdit,
    onClickEdit,
    onClickCancel,
    onClickSave,
  } = props;
  return (
    <React.Fragment>
      {isEdit && (
        <Button size="small" variant="contained">
          保存
        </Button>
      )}
      {isEdit && (
        <Button
          size="small"
          variant="contained"
          onClick={onClickCancel}
        >
          キャンセル
        </Button>
      )}
      {!isEdit && (
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={onClickEdit}
        >
          編集
        </Button>
      )}

      {!isEdit && (
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            console.log('clicked');
          }}
        >
          削除
        </Button>
      )}

      {!isEdit && (
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            console.log('clicked');
          }}
        >
          ダウンロード
        </Button>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  isEdit: state.userDetailPage.clientTab.isEdit,
});

const mapDispatchToProps = dispatch => ({
  onClickCancel: () => {
    dispatch(toggleEditMode(false, 'CLIENT'));
  },
  onClickEdit: () => {
    dispatch(toggleEditMode(true, 'CLIENT'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
