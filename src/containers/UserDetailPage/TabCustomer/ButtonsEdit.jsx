// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { toggleEditMode } from '../actions';
import { putCustomer } from './actions';

type PropsType = {
  isEdit: boolean,
  isError: boolean,
  onClickCancel: Event => void,
  onClickEdit: Event => void,
  onClickSave: Event => void,
};

function ButtonsEdit(props: PropsType): React.Node {
  const {
    isEdit,
    isError,
    onClickCancel,
    onClickEdit,
    onClickSave,
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
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = (state: StateType, { dispatch }) => ({
  isEdit: state.userDetailPage.customerTab.isEdit,
  isError: Object.values(
    state.userDetailPage.customerTab.isInputError
  ).some(value => value === true),
  onClickCancel: () => {
    dispatch(toggleEditMode(false, 'CUSTOMER'));
  },
  onClickEdit: () => {
    dispatch(toggleEditMode(true, 'CUSTOMER'));
  },
  onClickSave: () => {
    const kids_id = state.data.baseInfo.id;
    const { inputValues } = state.userDetailPage.customerTab;
    const { base_id } = inputValues;
    dispatch(putCustomer(kids_id, base_id, inputValues));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ButtonsEdit);
