// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import styles from './css/userInfo.css';

type PropsType = {
  onClick: Event => void,
  isActive: boolean,
};

function ButtonBack(props: PropsType): React.Node {
  const { onClick, isActive } = props;
  return (
    <Button
      className={styles.prevBtn}
      onClick={onClick}
      disabled={!isActive}
    >
      <ArrowLeftIcon />
      前のユーザー
    </Button>
  );
}

const mapStateToProps = state => ({
  isActive: state.userDetailPage.buttonPrevIsActive,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => {},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonBack);
