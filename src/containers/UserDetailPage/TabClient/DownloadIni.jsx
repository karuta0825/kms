// @flow
import { connect } from 'react-redux';
import Download from '../../../components/Download';
import { toggleDownloadItem } from './actions';
import { makeBlobFromObj } from '../../../utils/download';

function makeBlob(state: StateType): Blob {
  const { userkey, db_password, dbserver } = state.data.baseInfo;
  const info = {
    '[USER]': '',
    'DBName=': dbserver || '',
    'User=': userkey || '',
    'Password=': db_password || '',
  };
  return makeBlobFromObj(info);
}

const mapStateToProps = (state: StateType): Object => {
  const { kid } = state.data.baseInfo;
  const filename = `UserName_${kid}.ini`;
  return {
    label: 'ユーザー追加ini',
    isChecked: state.userDetailPage.clientTab.download.userAddIni,
    filename,
    canDownload: state.userDetailPage.clientTab.canDownload,
    blob: makeBlob(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: event => {
    dispatch(toggleDownloadItem(event.target.checked, 'userAddIni'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Download);
