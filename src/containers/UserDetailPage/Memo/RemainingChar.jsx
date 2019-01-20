// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import styles from './css/modal.css';

type PropsType = {
  length: number,
};

function RemaingChar(props: PropsType): React.Node {
  const { length } = props;
  return (
    <div className={styles.remaingChar}>
      {`残り文字数: ${length}`}
    </div>
  );
}

const mapStateToProps = (
  state: StateType
): { length: number } => {
  const msg = state.userDetailPage.memo.inputValues.message;
  const length = (msg && msg.length) || 0;
  return {
    length: 200 - length,
  };
};

export default connect(mapStateToProps)(RemaingChar);
