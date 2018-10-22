// @flow
import HomeIcon from '@material-ui/icons/Home';
import { connect } from 'react-redux';
import MenuButton from '../../components/MenuButton';
import { changeTitle, changeLocation } from './actions';

const MenuHome = MenuButton(HomeIcon, 'ホーム');

const mapStateToProps = (state) => ({
  isActive: state.location === 'home',
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    ownProps.history.push('/home');
    dispatch(changeLocation('home'));
    dispatch(changeTitle('ホーム'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuHome);
