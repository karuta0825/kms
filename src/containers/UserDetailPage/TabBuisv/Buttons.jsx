// @flow
import * as React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { toggleEditMode } from '../actions';

type PropsType = {
  isEdit: boolean,
  onClickSave: Event => void,
  onClickCancel: Event => void,
  onClickEdit: Event => void,
};

const Buttons = (props: PropsType): React.Node => {
  const {
    isEdit,
    onClickSave,
    onClickCancel,
    onClickEdit,
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
    </React.Fragment>
  );
};

const mapStateToProps = (state: StateType) => ({
  isEdit: state.userDetailPage.busivTab.isEdit,
});

const mapDispatchToProps = dispatch => ({
  onClickCancel: () => {
    dispatch(toggleEditMode(false, 'BUSIV'));
  },
  onClickEdit: () => {
    dispatch(toggleEditMode(true, 'BUSIV'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
