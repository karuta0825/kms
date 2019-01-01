// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { changeValue } from './actions';
import SelectionInput from '../../../components/SelectionInput';
import { filterServer } from '../../../utils';
import type { PropsType } from '../../../components/SelectionInput';

function SelectAPServer(props: PropsType): React.Node {
  return <SelectionInput {...props} />;
}

const mapStateToProps = state => ({
  title: 'APサーバ',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  value: state.userDetailPage.baseInfoTab.inputValues.server,
  items: filterServer(
    state.data.servers,
    state.data.baseInfo.version,
    'AP'
  ),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('server', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectAPServer);
