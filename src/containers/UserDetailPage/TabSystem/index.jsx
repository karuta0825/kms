// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import styles from '../css/tab.css';
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
import Buttons from './Buttons';
import InputClientNum from './InputClientNum';
import InputPCNum from './InputPCNum';
import InputNumberId from './InputNumberId';
import InputRangeId from './InputRangeId';

type PropsType = {
  has_busiv: boolean,
  has_fenics: boolean,
};

function TabSystem(props: PropsType): React.Node {
  const { has_busiv, has_fenics } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.action}>
        <Buttons />
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
        <InputClientNum />
        {has_fenics && has_busiv && <InputPCNum />}
        {has_busiv && <InputBusivNum />}
        {has_fenics && <InputFenicsNum />}
        <InputNumberId />
        <InputRangeId />
        <SwitchQA />
      </div>
    </div>
  );
}

const mapStateToProps = (state: StateType) => ({
  has_busiv:
    state.userDetailPage.baseInfoTab.inputValues.has_busiv === 1,
  has_fenics:
    state.userDetailPage.baseInfoTab.inputValues.has_fenics === 1,
});

export default connect(mapStateToProps)(TabSystem);
