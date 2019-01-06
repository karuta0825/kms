// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { toggleNewAddMode } from './actions';

type PropsType = {
  onClickCancel: Event => void,
  onClickSave: Event => void,
};

function ButtonsNew(props: PropsType): React.Node {
  const { onClickCancel, onClickSave } = props;
  return (
    <React.Fragment>
      <Button variant="contained" onClick={onClickSave}>
        作成
      </Button>
      <Button variant="contained" onClick={onClickCancel}>
        キャンセル
      </Button>
    </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => ({
  onClickCancel: () => {
    dispatch(toggleNewAddMode(false));
  },
  onClickSave: () => {
    console.log('saved');
  },
});

export default connect(
  null,
  mapDispatchToProps
)(ButtonsNew);
