// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../../components/TextInput';
import type { TextInputPropsType } from '../../../components/TextInput';

function InputPCNum(props: TextInputPropsType): React.Node {
  return <TextInput {...props} />;
}

const mapStateToProps = (
  state: StateType
): { title: string, isEdit: boolean, value: string } => {
  const fenicsNum =
    state.userDetailPage.baseInfoTab.inputValues.fenics_number;
  const busivNum =
    state.userDetailPage.baseInfoTab.inputValues.busiv_number;
  return {
    title: '端末数(Fenics + ビジV)',
    isEdit: false,
    value: String(fenicsNum + busivNum),
  };
};

export default connect(mapStateToProps)(InputPCNum);
