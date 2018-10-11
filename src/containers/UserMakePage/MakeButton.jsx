import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeUser } from './actions';

const mapStateToProps = state => ({
  variant: 'contained',
  color: 'primary',
  disabled: !state.userMakePage.canMakeUser,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(makeUser());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);
