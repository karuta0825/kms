// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import styles from './css/memo.css';
import { filterMemo } from './actions';

type PropsType = {
  value: string,
  onChange: Event => void,
};

function FilterMemo(props: PropsType): React.Node {
  const { value, onChange } = props;
  return (
    <FormControl className={styles.memoSelecter}>
      <NativeSelect
        value={value}
        onChange={onChange}
        name="memo"
      >
        <option value="">全て</option>
        <option value="emergency">緊急</option>
        <option value="important">重要</option>
        <option value="reminder">備忘</option>
        <option value="special">個別</option>
      </NativeSelect>
    </FormControl>
  );
}

const mapStateToProps = (state: StateType) => ({
  value: state.userDetailPage.memo.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(filterMemo(e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterMemo);
