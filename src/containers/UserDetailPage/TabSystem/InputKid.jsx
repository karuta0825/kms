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

function InputKid(props: PropsType): React.Node {
  return <NumberInput {...props} />;
}

const mapStateToProps = state => ({
  title: 'KID',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  value: state.userDetailPage.baseInfoTab.inputValues.kid,
  customProps: {
    onInput: ({ target }) => {
      if (target.value.length > 5)
        target.value = target.value.slice(0, 5);
    },
  },
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('kid', e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputKid);
