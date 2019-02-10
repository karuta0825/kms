// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { toggleDeleteModal } from './actions';
import FilterItem from './FilterItem';

type PropsType = {
  onClick: Event => void,
};

function Buttons(props: PropsType): React.Node {
  const { onClick } = props;
  return (
    <React.Fragment>
      <FilterItem />
      <Button variant="contained" onClick={onClick}>
        削除
      </Button>
    </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(toggleDeleteModal(true));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(Buttons);
