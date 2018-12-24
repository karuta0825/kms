// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { changeValue } from './actions';
import SelectionInput from '../../../components/SelectionInput';

type PropsType = {
  title: string,
  isEdit: boolean,
  value: string,
  items: Array<ServerType>,
  onChange: Event => void,
};

function SelectAPServer(props: PropsType): React.Node {
  return <SelectionInput {...props} />;
}

const mapStateToProps = state => ({
  title: 'DBサーバ',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  value: state.userDetailPage.baseInfoTab.inputValues.server,
  items: state.data.servers,
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
