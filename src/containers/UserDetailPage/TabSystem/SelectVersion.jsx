// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Switch from '../../../components/Switch';
import styles from '../../../components/css/TextInput.css';

type PropsType = {
  title: string,
  isEdit: boolean,
  version: string,
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

function SelectVersion(props: PropsType): React.Node {
  const { title, isEdit, version } = props;
  const isLM = version === 'LM';
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      <Switch name="ES" isEdit={false} isSelected={isLM} />
      <Switch name="LM" isEdit={false} isSelected={!isLM} />
      {helperText(isEdit)}
    </div>
  );
}

const mapStateToProps = state => ({
  title: 'バージョン',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  version: state.userDetailPage.baseInfoTab.inputValues.version,
});

export default connect(mapStateToProps)(SelectVersion);
