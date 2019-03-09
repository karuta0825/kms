// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeUser } from './actions';

type PropsType = {
  disabled: boolean,
  onClick: Event => void,
};

function MakeButton(props: PropsType): React.Node {
  const { disabled, onClick } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      disabled={disabled}
      onClick={onClick}
    >
      作成
    </Button>
  );
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = (state: StateType, { dispatch }) => ({
  disabled: !state.userMakePage.canMakeUser,
  onClick: () => {
    const { inputValues } = state.userMakePage;
    dispatch(makeUser(inputValues));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(MakeButton);
