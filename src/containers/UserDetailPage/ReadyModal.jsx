// @flow
import { connect } from 'react-redux';
import ProgressModal from '../../components/ProgressModal';

const mapStateToProps = (state: StateType) => ({
  title: 'データ取得中',
  description: 'Loading',
  isOpen: state.userDetailPage.isFetching,
});

export default connect(mapStateToProps)(ProgressModal);
