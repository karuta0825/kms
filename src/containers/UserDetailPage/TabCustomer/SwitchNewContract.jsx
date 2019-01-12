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

function SwitchNewContract(props: PropsType): React.Node {
  const { title, isEdit, isSelected, onClick } = props;
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      <Switch
        name="はい"
        isEdit={isEdit}
        isSelected={isSelected}
        onClick={onClick}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  title: '新規開設',
  isEdit: state.userDetailPage.customerTab.isEdit,
  isSelected:
    state.userDetailPage.customerTab.inputValues
      .is_new_contract === 1,
});

const mergeProps = (stateProps, dispatchProps): PropsType => {
  const { isSelected } = stateProps;
  const { dispatch } = dispatchProps;
  return {
    ...stateProps,
    onClick: () => {
      const value = isSelected ? 0 : 1;
      dispatch(changeValue('is_new_contract', value));
    },
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(SwitchNewContract);
