// @flow
import ListAltIcon from '@material-ui/icons/ListAlt';
import { connect } from 'react-redux';
import MenuButton from '../../components/MenuButton';
import { changeTitle, changeLocation } from './actions';

const MenuFenicsList = MenuButton(ListAltIcon, 'Fenics一覧');

const mapStateToProps = state => ({
  isActive: state.location === 'fenicsList',
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    ownProps.history.push('/fenicsList');
    dispatch(changeLocation('fenicsList'));
    dispatch(changeTitle('Fenics一覧'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuFenicsList);
