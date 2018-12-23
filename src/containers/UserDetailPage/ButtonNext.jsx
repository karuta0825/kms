// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import styles from './css/userinfo.css';

type PropsType = {
  onClick: Event => void,
  isActive: boolean,
};

function ButtonBack(props: PropsType): React.Node {
  const { onClick, isActive } = props;
  return (
    <Button
      className={styles.nextBtn}
      onClick={onClick}
      disabled={!isActive}
    >
      次のユーザー
      <ArrowRightIcon />
    </Button>
  );
}

const mapStateToProps = state => ({
  isActive: state.userDetailPage.buttonNextIsActive,
});

// 次のユーザをみつける関数を呼び出す必要がある。
// ユーザーのindexとボタンが押せるかどうかの両方が必要だね
const mapDispatchToProps = dispatch => ({
  onClick: () => {},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonBack);
