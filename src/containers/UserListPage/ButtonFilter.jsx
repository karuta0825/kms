import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
import styles from './css/button.css';
import { toggleFilter } from './actions';

type PropsType = {
  onClick: Event => void,
};

function FilterButton(props: PropsType): React.Node {
  const { onClick } = props;
  return (
    <Button
      variant="contained"
      className={styles.filter}
      onClick={onClick}
      size="small"
    >
      <FilterListIcon className={styles.buttonIcon} />
      フィルター詳細
    </Button>
  );
}

const mapDispatchToProp = dispatch => ({
  onClick: () => {
    dispatch(toggleFilter(true));
  },
});

export default connect(
  null,
  mapDispatchToProp
)(FilterButton);
