// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import styles from '../css/tab.css';
import { toggleEditMode } from '../actions';
import InputKid from './InputKid';
import SelectAPServer from './SelectAPServer';
import InputStartDate from './InputStartDate';
import InputEndDate from './InputEndDate';
import SelectDBServer from './SelectDBServer';
import InputUserName from './InputUserName';
import InputDBPassword from './InputDBPassword';
import InputUserkey from './InputUserkey';
import InputFenicskey from './InputFenicskey';
import SwitchQA from './SwitchQA';
import SwitchMobile from './SwitchMobile';
import InputBusivNum from './InputBusivNum';
import InputFenicsNum from './InputFenicsNum';
import SelectNetwork from './SelectNetwork';
import SelectVersion from './SelectVersion';
import SelectSystemType from './SelectSystemType';

type PropsType = {
  isEdit: boolean,
  has_busiv: boolean,
  onClickSave: Event => void,
  onClickCancel: Event => void,
  onClickEdit: Event => void,
};

function TabSystem(props: PropsType): React.Node {
  const {
    isEdit,
    has_busiv,
    onClickSave,
    onClickCancel,
    onClickEdit,
  } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.action}>
        {isEdit && <Button variant="contained">保存</Button>}
        {isEdit && (
          <Button variant="contained" onClick={onClickCancel}>
            キャンセル
          </Button>
        )}
        {!isEdit && (
          <Button
            variant="contained"
            color="secondary"
            onClick={onClickEdit}
          >
            編集
          </Button>
        )}
      </div>
      <div className={styles.body}>
        <InputStartDate />
        <InputEndDate />
        <InputKid />
        <InputUserName />
        <SelectSystemType />
        <SelectVersion />
        <SelectNetwork />
        <SwitchMobile />
        <SelectAPServer />
        <SelectDBServer />
        <InputUserkey />
        <InputDBPassword />
        <InputFenicskey />
        {has_busiv && <InputBusivNum />}
        <InputFenicsNum />
        <SwitchQA />
      </div>
    </div>
  );
}

const mapStateToProps = (state: StateType) => ({
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  has_busiv:
    state.userDetailPage.baseInfoTab.inputValues.has_busiv === 1,
});

const mapDispatchToProps = dispatch => ({
  onClickCancel: () => {
    dispatch(toggleEditMode(false, 'BASEINFO'));
  },
  onClickEdit: () => {
    dispatch(toggleEditMode(true, 'BASEINFO'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabSystem);
