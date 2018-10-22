// @flow
import BuildIcon from '@material-ui/icons/Build';
import { connect } from 'react-redux';
import MenuButton from '../../components/MenuButton';
import { changeTitle, changeLocation } from './actions';

const MenuSetting = MenuButton(BuildIcon, '設定');

const mapStateToProps = state => ({
  isActive: state.location === 'setting',
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    ownProps.history.push('/setting');
    dispatch(changeLocation('setting'));
    dispatch(changeTitle('設定'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuSetting);
