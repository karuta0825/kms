// @flow
import * as React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { toggleEditMode } from '../actions';
import { putPartner } from './actions';

type PropsType = {
  isEdit: boolean,
  isError: boolean,
  onClickSave: Event => void,
  onClickCancel: Event => void,
  onClickEdit: Event => void,
};

const Buttons = (props: PropsType): React.Node => {
  const {
    isEdit,
    isError,
    onClickSave,
    onClickCancel,
    onClickEdit,
  } = props;
  return (
    <React.Fragment>
      {isEdit && (
        <Button
          variant="contained"
          onClick={onClickSave}
          disabled={isError}
        >
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
    </React.Fragment>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = (state: StateType, { dispatch }) => ({
  isEdit: state.userDetailPage.partnerTab.isEdit,
  isError: Object.values(
    state.userDetailPage.partnerTab.isInputError
  ).some(v => v === true),
  onClickCancel: () => {
    dispatch(toggleEditMode(false, 'PARTNER'));
  },
  onClickEdit: () => {
    dispatch(toggleEditMode(true, 'PARTNER'));
  },
  onClickSave: () => {
    const kids_id = state.data.baseInfo.id;
    const { inputValues } = state.userDetailPage.partnerTab;
    dispatch(putPartner(kids_id, inputValues));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Buttons);
