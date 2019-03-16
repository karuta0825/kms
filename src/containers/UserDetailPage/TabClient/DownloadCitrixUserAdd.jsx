// @flow
import { connect } from 'react-redux';
import _ from 'underscore';
import Download from '../../../components/Download';
import { toggleDownloadItem } from './actions';
import { makeBlobFromStr } from '../../../utils/download';

function makeBlob(state: StateType): Blob {
  const { user_name, userkey } = state.data.baseInfo;
  const { selection } = state.userDetailPage.clientTab;
  const targets = selection.map(s =>
    state.data.clients.find(client => client.client_id === s)
  );
  const tmpl = state.data.templates.apUserSet;
  const compiled = _.template(tmpl);
  return makeBlobFromStr(
    compiled({ userkey, user_name, list: targets })
  );
}

const mapStateToProps = (state: StateType): Object => {
  const { kid } = state.data.baseInfo;
  const filename = `AP_WinUserSet_${kid}.bat`;
  return {
    label: 'Citrixユーザ追加bat(2008R2 AP用)',
    isChecked: state.userDetailPage.clientTab.download.apUserSet,
    filename,
    canDownload: state.userDetailPage.clientTab.canDownload,
    blob: makeBlob(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: event => {
    dispatch(toggleDownloadItem(event.target.checked, 'apUserSet'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Download);
