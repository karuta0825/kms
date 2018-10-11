// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { toggleFilter } from './actions';
import styles from './css/filter.css';
import FilterSystemtype from './FilterSystemtype';
import FilterMobile from './FilterMobile';
import FilterVersion from './FilterVersion';
import FilterNetwork from './FilterNetwork';

type PropsType = {
  isFilterOpen: boolean,
  onClick: (boolean) => void,
};

class Filter extends React.Component<PropsType> {
  render(): React.Node {
    const { isFilterOpen, onClick } = this.props;
    const Style = isFilterOpen
      ? `${styles.default} ${styles.open}`
      : `${styles.default}`;
    return (
      <div className={Style}>
        <button type="button" onClick={onClick}>
          CLOSE
        </button>
        <FilterSystemtype />
        <FilterVersion />
        <FilterNetwork />
        <FilterMobile />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFilterOpen: state.userListPage.isFilterOpen,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(toggleFilter(false));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);
