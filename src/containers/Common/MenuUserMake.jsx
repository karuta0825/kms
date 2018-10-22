// @flow
import StoreIcon from '@material-ui/icons/Store';
import { connect } from 'react-redux';
import MenuButton from '../../components/MenuButton';
import { changeTitle, changeLocation } from './actions';

const MenuUserMake = MenuButton(StoreIcon, 'ユーザ作成');

const mapStateToProps = state => ({
  isActive: state.location === 'makeKid',
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    ownProps.history.push('/makeKid');
    dispatch(changeLocation('makeKid'));
    dispatch(changeTitle('ユーザ作成'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuUserMake);
