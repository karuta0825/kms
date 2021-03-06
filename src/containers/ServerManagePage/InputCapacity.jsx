// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { changeValue } from './actions';
import NumberInput from '../../components/NumberInput';

type PropsType = {
  title: string,
  isEdit: boolean,
  value: string,
  customProps: Object,
  onChange: Event => void,
};

function InputNumberId(props: PropsType): React.Node {
  return <NumberInput {...props} />;
}

const mapStateToProps = state => ({
  title: '収容数',
  isEdit: true,
  value: state.serverManagePage.inputValues.capacity,
  customProps: {
    onInput: ({ target }) => {
      if (target.value.length > 3)
        target.value = target.value.slice(0, 3);
    },
  },
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('capacity', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputNumberId);
