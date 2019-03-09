// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { toggleDeleteModal } from '../actions';
import FilterItem from './FilterItem';

type PropsType = {
  selection: Array<number>,
  onClick: Event => void,
};

function Buttons(props: PropsType): React.Node {
  const { onClick, selection } = props;
  return (
    <React.Fragment>
      <FilterItem />
      <Button
        variant="contained"
        onClick={onClick}
        disabled={selection.length < 1}
      >
        削除
      </Button>
    </React.Fragment>
  );
}

const mapStateToProps = (state: StateType) => ({
  selection: state.userDetailPage.historyTab.selection,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(toggleDeleteModal(true, 'historys'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
