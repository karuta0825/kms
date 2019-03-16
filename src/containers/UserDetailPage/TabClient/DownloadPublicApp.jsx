// @flow
import { connect } from 'react-redux';
import _ from 'underscore';
import Download from '../../../components/Download';
import { toggleDownloadItem } from './actions';
import { makeBlobFromStr } from '../../../utils/download';

function makeBlob(state: StateType): Blob {
  const { server, userkey } = state.data.baseInfo;
  const tmpl = state.data.templates.publicApps;
  const compiled = _.template(tmpl);
  return makeBlobFromStr(compiled({ server, userkey }));
}

const mapStateToProps = (state: StateType): Object => {
  const { kid } = state.data.baseInfo;
  const filename = `PublicXenApps_${kid}.ps1`;
  return {
    label: 'Xenapp公開アプリ設定(2008R2要)',
    isChecked: state.userDetailPage.clientTab.download.publicApps,
    filename,
    canDownload: state.userDetailPage.clientTab.canDownload,
    blob: makeBlob(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: event => {
    dispatch(toggleDownloadItem(event.target.checked, 'publicApps'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Download);
