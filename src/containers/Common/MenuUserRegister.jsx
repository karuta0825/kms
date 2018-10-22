// @flow
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { connect } from 'react-redux';
import MenuButton from '../../components/MenuButton';
import { changeTitle, changeLocation } from './actions';

const MenuUserRegister = MenuButton(AssignmentIndIcon, 'ユーザ登録');

const mapStateToProps = state => ({
  isActive: state.location === 'registerKid',
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    ownProps.history.push('/registerKid');
    dispatch(changeLocation('registerKid'));
    dispatch(changeTitle('ユーザー登録'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuUserRegister);
