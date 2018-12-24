// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { changeValue, addValue } from './actions';
import NumberInputWithBtn from '../../../components/NumberInputWithBtn';

type PropsType = {
  title: string,
  isEdit: boolean,
  value: number | string,
  customProps: Object,
  onChange: Event => void,
  onClickAdd: Event => void,
  onClickDel: Event => void,
  inputCheck: (
    number | string
  ) => { isError: boolean, msg: string },
};

function InputFenicsNum(props: PropsType): React.Node {
  return <NumberInputWithBtn {...props} />;
}

const mapStateToProps = state => ({
  title: 'Fenics利用端末数',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  value:
    state.userDetailPage.baseInfoTab.inputValues.client_number,
  inputCheck: (
    num: number | string
  ): { isError: boolean, msg: string } => {
    const fmt = Number(num);
    if (fmt < 0) {
      return {
        isError: true,
        msg: '0以上の数を指定してください',
      };
    }

    if (fmt < state.data.baseInfo.client_number) {
      return {
        isError: true,
        msg: '削減はできません。クライアントタブから行ってくれ',
      };
    }

    return {
      isError: false,
      msg: '',
    };
  },
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeValue('client_number', e.target.value));
  },
  onClickAdd: () => {
    dispatch(addValue('client_number', 1));
  },
  onClickDel: () => {
    dispatch(addValue('client_number', -1));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFenicsNum);
