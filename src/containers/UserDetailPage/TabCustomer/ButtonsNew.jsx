// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { toggleNewAddMode, postCustomer } from './actions';

type PropsType = {
  isError: boolean,
  onClickCancel: Event => void,
  onClickSave: Event => void,
};

function ButtonsNew(props: PropsType): React.Node {
  const { isError, onClickCancel, onClickSave } = props;
  return (
    <React.Fragment>
      <Button
        variant="contained"
        onClick={onClickSave}
        disabled={isError}
      >
        作成
      </Button>
      <Button variant="contained" onClick={onClickCancel}>
        キャンセル
      </Button>
    </React.Fragment>
  );
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = (state: StateType, { dispatch }) => ({
  isError: Object.values(
    state.userDetailPage.customerTab.isInputError
  ).some(value => value === true),
  onClickCancel: () => {
    dispatch(toggleNewAddMode(false));
  },
  onClickSave: () => {
    const kids_id = state.data.baseInfo.id;
    const { inputValues } = state.userDetailPage.customerTab;
    dispatch(postCustomer(kids_id, inputValues));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ButtonsNew);
