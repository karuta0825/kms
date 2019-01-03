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

type PropsType = {
  has_busiv: boolean,
};

function TabSystem(props: PropsType): React.Node {
  const { has_busiv } = props;
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
        {has_busiv && <InputBusivNum />}
        <InputFenicsNum />
        <SwitchQA />
      </div>
    </div>
  );
}

const mapStateToProps = (state: StateType) => ({
  has_busiv:
    state.userDetailPage.baseInfoTab.inputValues.has_busiv === 1,
});

export default connect(mapStateToProps)(TabSystem);
