// @flow
import ViewListIcon from '@material-ui/icons/ViewList';
import { connect } from 'react-redux';
import MenuButton from '../../components/MenuButton';
import { changeTitle, changeLocation } from './actions';

const MenuUserList = MenuButton(ViewListIcon, 'ユーザ一覧');

const mapStateToProps = state => ({
  isActive: state.location === 'kidList',
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    ownProps.history.push('/kidList');
    dispatch(changeLocation('kidList'));
    dispatch(changeTitle('ユーザ一覧'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuUserList);
