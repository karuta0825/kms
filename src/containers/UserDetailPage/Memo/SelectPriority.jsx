// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { InputLabel } from '@material-ui/core';
import Switch from '../../../components/Switch';
import styles from './css/modal.css';
import { changeValue } from './actions';

type PropsType = {
  onClick: MemoPriorityType => void,
  priority: MemoPriorityType,
};

function SelectPriority(props: PropsType): React.Node {
  const { priority, onClick } = props;
  return (
    <div>
      <InputLabel className={styles.priorityTitle}>
        優先度
      </InputLabel>
      <div>
        <Switch
          name="緊急"
          isEdit
          isSelected={priority === 'emergency'}
          onClick={() => onClick('emergency')}
        />
        <Switch
          name="重要"
          isEdit
          isSelected={priority === 'important'}
          onClick={() => onClick('important')}
        />
        <Switch
          name="備忘"
          isEdit
          isSelected={priority === 'reminder'}
          onClick={() => onClick('reminder')}
        />
        <Switch
          name="個別"
          isEdit
          isSelected={priority === 'special'}
          onClick={() => onClick('special')}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state: StateType) => ({
  priority: state.userDetailPage.memo.inputValues.priority,
});

const mapDispatchToProps = dispatch => ({
  onClick: (priority: MemoPriorityType) => {
    dispatch(changeValue('priority', priority));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPriority);
