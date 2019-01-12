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

function SwitchQA(props: PropsType): React.Node {
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
  title: '業務QA',
  isEdit: state.userDetailPage.customerTab.isEdit,
  isSelected:
    state.userDetailPage.customerTab.inputValues.has_qa === 1,
});

const mergeProps = (stateProps, dispatchProps): PropsType => {
  const { isSelected } = stateProps;
  const { dispatch } = dispatchProps;
  return {
    ...stateProps,
    onClick: () => {
      const value = isSelected ? 0 : 1;
      dispatch(changeValue('has_qa', value));
    },
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(SwitchQA);
