// @flow
import { connect } from 'react-redux';
import moment from 'moment';
import Download from '../../../components/Download';
import { toggleDownloadItem } from './actions';
import { makeBlobFromObjList } from '../../../utils/download';

function makeBlob(state: StateType): Blob {
  const header =
    '"※update_flag[A:Add,M:modify,D:Delete] ",※Prefix,※user_label,init_password,id_group,access_control_group,start_date[ex.20091201],end_date[ex.20091231],comment1,comment2,comment3,"regist_terminal_flag[1:Pre-Reg,2:Auto-Reg,3:Approval]",card_line_no01[ex.09012345678],card_line_no02[ex.09012345678],card_line_no03[ex.09012345678],card_line_no04[ex.09012345678],card_line_no05[ex.09012345678],card_line_no06[ex.09012345678],card_line_no07[ex.09012345678],card_line_no08[ex.09012345678],card_line_no09[ex.09012345678],card_line_no10[ex.09012345678]';
  const { selection } = state.userDetailPage.fenicsTab;
  const selectionItem = selection.map(item =>
    state.data.fenics.find(fenics => fenics.fenics_id === item)
  );
  const selectionData = selectionItem.map((fenics: FenicsType) => ({
    update_flag: 'A',
    prefix: 'hopecl-',
    user_label: fenics.fenics_id,
    init_password: fenics.password,
    id_group: 'お客様　システム１',
    access_control_group: 'お客様用　システム１',
    start_date:
      (fenics.start_on &&
        moment(fenics.start_on).format('YYYYMMDD')) ||
      '',
    end_date: '',
    comment1: state.data.baseInfo.user_name,
    comment2: `パートナー　`, // saのパートナ名を入れる予定
    comment3: `システム１　${state.data.baseInfo.server}`,
    regist_terminal_flag: 2,
  }));
  return makeBlobFromObjList(selectionData, header);
}

const mapStateToProps = (state: StateType): Object => {
  const filename = `${new moment().format('YYYYMMDD')}_${
    state.data.baseInfo.kid
  }_fenicsAccount.csv`;
  return {
    label: 'fenicsアカウント作成CSV',
    isChecked: state.userDetailPage.fenicsTab.download.fenics,
    filename,
    canDownload: state.userDetailPage.fenicsTab.canDownload,
    blob: makeBlob(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: event => {
    dispatch(toggleDownloadItem(event.target.checked, 'fenics'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Download);
