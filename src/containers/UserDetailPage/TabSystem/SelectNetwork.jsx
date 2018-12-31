// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Switch from '../../../components/Switch';
import styles from '../../../components/css/TextInput.css';

type PropsType = {
  title: string,
  isEdit: boolean,
  has_fenics: boolean,
  has_busiv: boolean,
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

function SelectNetwork(props: PropsType): React.Node {
  const { title, isEdit, has_fenics, has_busiv } = props;
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      <Switch
        name="Fenics"
        isEdit={false}
        isSelected={has_fenics}
      />
      <Switch
        name="ビジネスVPN"
        isEdit={false}
        isSelected={has_busiv}
      />
      {helperText(isEdit)}
    </div>
  );
}

const mapStateToProps = state => ({
  title: 'ネットワーク',
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  has_busiv:
    state.userDetailPage.baseInfoTab.inputValues.has_busiv === 1,
  has_fenics:
    state.userDetailPage.baseInfoTab.inputValues.has_fenics ===
    1,
});

export default connect(mapStateToProps)(SelectNetwork);
