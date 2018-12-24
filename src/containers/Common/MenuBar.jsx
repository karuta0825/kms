import { connect } from 'react-redux';
import MenuDrawer from '../../components/MenuDrawer';
import { toggleDrawer } from './actions';

const mapStateToProps = state => ({
  title: state.bar.menuTitle,
  isOpen: state.bar.drawerIsOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: (isOpen: boolean) => {
    dispatch(toggleDrawer(isOpen));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuDrawer);
