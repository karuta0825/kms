// @flow
import { connect } from 'react-redux';
import Moment from 'moment';
import Download from '../../../components/Download';
import { toggleDownloadItem } from './actions';
import { makeBlobFromObjList } from '../../../utils/download';

function makeBlob(state: StateType): Blob {
  const { selection } = state.userDetailPage.clientTab;
  const clients = selection.map(select =>
    state.data.clients.find(client => client.client_id === select)
  );

  const objList = clients.map(
    (client): { [key: string]: string } => {
      const fenics_account = state.data.fenics.find(
        f => f.fenics_id === client.fenics_id
      );
      return {
        hostname: (fenics_account && fenics_account.pc_name) || '',
        fenics_id:
          (client.fenics_id && `hopecl-${client.fenics_id}`) || '',
        password: client.fenics_id || '',
        client_id: client.client_id,
        client_password: client.client_pass,
      };
    }
  );

  const {
    user_name,
    kid,
    userkey,
    db_password,
    server,
  } = state.data.baseInfo;
  const srvInfo = state.data.servers.find(s => s.name === server);
  const header = {
    user_name,
    kid,
    userkey,
    db_password,
    domain: server,
    ap_address: srvInfo && srvInfo.ip,
    citrix_url:
      srvInfo && `http://${srvInfo.ip}/Citrix/PNagent/config.xml`,
    comment: `${new Moment().format('YYYY/MM/DD')} 追加分`,
  };

  return makeBlobFromObjList(
    objList,
    Object.values(header).join(',')
  );
}

const mapStateToProps = (state: StateType): Object => {
  const { kid } = state.data.baseInfo;
  const filename = `${new Moment().format(
    'YYYYMMDD'
  )}_${kid}_OpenNotice.csv`;
  return {
    label: '開通通知用CSV(追加用)',
    isChecked: state.userDetailPage.clientTab.download.openNoticeAdd,
    filename,
    canDownload: state.userDetailPage.clientTab.canDownload,
    blob: makeBlob(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: event => {
    dispatch(
      toggleDownloadItem(event.target.checked, 'openNoticeAdd')
    );
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Download);
