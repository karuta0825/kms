// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { changeValue } from '../actions';
import NumberInput from '../../../../components/NumberInput';

type PropsType = {
  title: string,
  isEdit: boolean,
  value: string,
  customProps: Object,
  onChange: Event => void,
};

function InputPID(props: PropsType): React.Node {
  return <NumberInput {...props} />;
}

const mapStateToProps = state => ({
  title: 'PID',
  isEdit: state.userDetailPage.partnerTab.isEdit,
  value: state.userDetailPage.partnerTab.inputValues.se_pid,
  customProps: {
    onInput: ({ target }) => {
      if (target.value.length > 5)
        target.value = target.value.slice(0, 5);
    },
  },
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('se_pid', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputPID);
