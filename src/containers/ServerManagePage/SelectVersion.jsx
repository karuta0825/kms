// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { changeValue } from './actions';
import SelectionInput from '../../components/SelectionInput';
import type { PropsType } from '../../components/SelectionInput';

function SelectVersion(props: PropsType): React.Node {
  return <SelectionInput {...props} nothing={false} />;
}

const mapStateToProps = (state: StateType) => ({
  title: 'バージョン',
  isEdit: true,
  value: state.serverManagePage.inputValues.version,
  items: [
    { id: 'LM', name: 'LM', value: 'LM' },
    { id: 'ES', name: 'ES', value: 'ES' },
  ],
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('version', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectVersion);
