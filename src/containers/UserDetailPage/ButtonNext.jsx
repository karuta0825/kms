// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
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

function ButtonNext(props: PropsType): React.Node {
  const { isActive, history, match, data, dispatch } = props;
  return (
    <Button
      size="small"
      className={styles.nextBtn}
      onClick={() => {
        const next = getNextKidsId(data, match.params.id, 1);
        if (next.kids_id) {
          history.push(`/kidList/detail/${next.kids_id}`);
        }
        dispatch(togglePrevNexButton(next));
      }}
      disabled={!isActive}
    >
      次のユーザー
      <ArrowRightIcon />
    </Button>
  );
}

const mapStateToProps = state => ({
  isActive: state.userDetailPage.buttonNextIsActive,
  data: searchUser(state.data.kids, state.userListPage.filter),
});

export default connect(mapStateToProps)(withRouter(ButtonNext));
