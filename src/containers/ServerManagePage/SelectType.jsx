// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { changeValue } from './actions';
import SelectionInput from '../../components/SelectionInput';
import type { PropsType } from '../../components/SelectionInput';

function SelectType(props: PropsType): React.Node {
  return <SelectionInput {...props} nothing={false}/>;
}

const mapStateToProps = (state: StateType) => ({
  title: 'タイプ',
  isEdit: true,
  value: state.serverManagePage.inputValues.type,
  items: [
    { id: 'AP', name: 'AP', value: 'AP' },
    { id: 'DB', name: 'DB', value: 'DB' },
    { id: 'WEB', name: 'WEB', value: 'WEB' },
    { id: 'FL', name: 'FL', value: 'FL' },
    { id: 'AD', name: 'AD', value: 'AD' },
  ],
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('type', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectType);
