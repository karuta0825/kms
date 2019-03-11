// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import InputName from './InputName';
import InputDomain from './InputDomain';
import InputIP from './InputIP';
import InputProject from './InputProject';
import InputCapacity from './InputCapacity';
import styles from './css/creater.css';
import SelectDB from './SelectDB';
import SelectVersion from './SelectVersion';
import SelectType from './SelectType';

type PropsType = {
  type: string,
};

function CreateView(props: PropsType): React.Node {
  const { type } = props;
  return (
    <div className={styles.wrapper}>
      <SelectType />
      <InputName />
      <InputIP />
      <SelectVersion />
      {type === 'AP' && <SelectDB />}
      {(type === 'DB' || type === 'AD') && <InputDomain />}
      <InputCapacity />
      <InputProject />
    </div>
  );
}

const mapStateToProps = (state: StateType) => ({
  type: state.serverManagePage.inputValues.type,
});

export default connect(mapStateToProps)(CreateView);
