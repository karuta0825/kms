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
        <Button variant="contained">
          保存
        </Button>
      )}
      {isEdit && (
        <Button
          variant="contained"
          onClick={onClickCancel}
        >
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
    </React.Fragment>
  );
};

const mapStateToProps = (state: StateType) => ({
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
});

const mapDispatchToProps = dispatch => ({
  onClickCancel: () => {
    dispatch(toggleEditMode(false, 'BASEINFO'));
  },
  onClickEdit: () => {
    dispatch(toggleEditMode(true, 'BASEINFO'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
