// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Switch from '../../../components/Switch';
import styles from '../../../components/css/TextInput.css';
import { changeValue } from './actions';

type PropsType = {
  title: string,
  isEdit: boolean,
  isSelected: boolean,
  onClick: Event => void,
};

function SwitchSXRJ(props: PropsType): React.Node {
  const { title, isEdit, isSelected, onClick } = props;
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      <Switch
        name="あり"
        isEdit={isEdit}
        isSelected={isSelected}
        onClick={onClick}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  title: 'SXRまたはJ連携',
  isEdit: state.userDetailPage.busivTab.isEdit,
  isSelected:
    state.userDetailPage.busivTab.inputValues.has_sxr_j === 1,
});

const mergeProps = (stateProps, dispatchProps): PropsType => {
  const { isSelected } = stateProps;
  const { dispatch } = dispatchProps;
  return {
    ...stateProps,
    onClick: () => {
      const value = isSelected ? 0 : 1;
      dispatch(changeValue('has_sxr_j', value));
    },
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(SwitchSXRJ);
