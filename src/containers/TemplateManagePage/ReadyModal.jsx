// @flow
import { connect } from 'react-redux';
import ProgressModal from '../../components/ProgressModal';

const mapStateToProps = (state: StateType) => ({
  title: '更新中',
  description: 'Uploading',
  isOpen: state.templateManagePage.isOpenUpdateModal,
});

export default connect(mapStateToProps)(ProgressModal);
