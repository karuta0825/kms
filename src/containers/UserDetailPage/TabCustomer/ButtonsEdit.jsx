// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { toggleEditMode } from '../actions';

type PropsType = {
  isEdit: boolean,
  onClickCancel: Event => void,
  onClickEdit: Event => void,
};

function ButtonsEdit(props: PropsType): React.Node {
  const { isEdit, onClickCancel, onClickEdit } = props;
  return (
    <React.Fragment>
      {isEdit && <Button variant="contained">保存</Button>}
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

const mapStateToProps = state => ({
  isEdit: state.userDetailPage.customerTab.isEdit,
});

const mapDispatchToProps = dispatch => ({
  onClickCancel: () => {
    dispatch(toggleEditMode(false, 'CUSTOMER'));
  },
  onClickEdit: () => {
    dispatch(toggleEditMode(true, 'CUSTOMER'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonsEdit);
