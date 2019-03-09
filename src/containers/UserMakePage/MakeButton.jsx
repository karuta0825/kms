import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeUser } from './actions';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = (state: StateType, { dispatch }) => ({
  variant: 'contained',
  color: 'primary',
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
)(Button);
