// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Switch from '../../../components/Switch';
import styles from '../../../components/css/TextInput.css';

type PropsType = {
  title: string,
  isEdit: boolean,
  isSelected: boolean,
};

function helperText(isEdit: boolean): React.Node | null {
  const styles = {
    fontSize: '10px',
    marginTop: '10px',
  };
  if (isEdit) {
    return (
      <span style={styles}>
        顧客情報タブから変更してください
      </span>
    );
  }
  return null;
}

function SwitchQA(props: PropsType): React.Node {
  const { title, isEdit, isSelected } = props;
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      <Switch
        name="あり"
        isEdit={false}
        isSelected={isSelected}
      />
      {helperText(isEdit)}
    </div>
  );
}

const mapStateToProps = state => ({
  title: '業務QA(全拠点中1つでも)',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  isSelected:
    state.userDetailPage.baseInfoTab.inputValues.has_qa === 1,
});

export default connect(mapStateToProps)(SwitchQA);
