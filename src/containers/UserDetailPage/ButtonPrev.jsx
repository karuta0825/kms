// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { withRouter } from 'react-router';
import styles from './css/userinfo.css';
import { getNextKidsId, searchUser } from '../../utils/index';
import { togglePrevNexButton } from './actions';

type PropsType = {
  isActive: boolean,
  history: Object,
  match: Object,
  data: Array<KidType>,
  dispatch: Action => void,
};

function ButtonBack(props: PropsType): React.Node {
  const { isActive, history, match, data, dispatch } = props;
  return (
    <Button
      size="small"
      className={styles.prevBtn}
      onClick={() => {
        const next = getNextKidsId(data, match.params.id, -1);
        if (next.kids_id) {
          history.push(`/kidList/detail/${next.kids_id}`);
        }
        dispatch(togglePrevNexButton(next));
      }}
      disabled={!isActive}
    >
      <ArrowLeftIcon />
      前のユーザー
    </Button>
  );
}

const mapStateToProps = state => ({
  isActive: state.userDetailPage.buttonPrevIsActive,
  data: searchUser(state.data.kids, state.userListPage.filter),
});

export default connect(mapStateToProps)(withRouter(ButtonBack));
