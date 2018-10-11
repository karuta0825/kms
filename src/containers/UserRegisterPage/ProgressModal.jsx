// @flow
import { connect } from 'react-redux';
import ProgressModal from '../../components/ProgressModal';
import { type StateType } from '../../initState';

const mapStateToProps = (state: StateType) => ({
  title: 'ユーザー登録',
  description: 'アップロード中',
  isOpen: state.userRegisterPage.isUploading,
});

export default connect(
  mapStateToProps,
)(ProgressModal);
