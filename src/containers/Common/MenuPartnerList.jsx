// @flow
import PartnerIcon from '@material-ui/icons/WC';
import { connect } from 'react-redux';
import MenuButton from '../../components/MenuButton';
import { changeTitle, changeLocation } from './actions';

const MenuPartnerList = MenuButton(PartnerIcon, 'パートナ一覧');

const mapStateToProps = state => ({
  isActive: state.location === 'partnerList',
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    ownProps.history.push('/partnerList');
    dispatch(changeLocation('partnerList'));
    dispatch(changeTitle('パートナ一覧'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuPartnerList);
