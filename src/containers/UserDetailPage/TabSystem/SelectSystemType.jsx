// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Switch from '../../../components/Switch';
import styles from '../../../components/css/TextInput.css';

type PropsType = {
  title: string,
  isEdit: boolean,
  system_type: SystemType,
};

function helperText(isEdit: boolean): React.Node | null {
  const styles = {
    fontSize: '10px',
    marginTop: '10px',
  };
  if (isEdit) {
    return <span style={styles}>変更できません</span>;
  }
  return null;
}

function SelectSystemType(props: PropsType): React.Node {
  const { title, isEdit, system_type } = props;
  const isCloud = system_type === 'cloud';
  const isOnpre = system_type === 'onpre';
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      <Switch
        name="オンプレ"
        isEdit={false}
        isSelected={isCloud}
      />
      <Switch
        name="クラウド"
        isEdit={false}
        isSelected={isOnpre}
      />
      {helperText(isEdit)}
    </div>
  );
}

const mapStateToProps = state => ({
  title: 'システム環境',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  system_type:
    state.userDetailPage.baseInfoTab.inputValues.system_type,
});

export default connect(mapStateToProps)(SelectSystemType);
