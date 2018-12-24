// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { changeValue } from './actions';
import NumberInput from '../../../components/NumberInput';

type PropsType = {
  title: string,
  isEdit: boolean,
  value: string,
  customProps: Object,
  onChange: Event => void,
};

function InputRangeId(props: PropsType): React.Node {
  return <NumberInput {...props} />;
}

const mapStateToProps = state => ({
  title: '端末ID収容数',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  value: state.userDetailPage.baseInfoTab.inputValues.range_id,
  customProps: {
    onInput: ({ target }) => {
      if (target.value.length > 4)
        target.value = target.value.slice(0, 4);
    },
  },
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('range_id', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputRangeId);
