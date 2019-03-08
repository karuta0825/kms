// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { FormControl, NativeSelect } from '@material-ui/core';
import { filterHistory } from './actions';

type PropsType = {
  value: string,
  onChange: Event => void,
  options: Array<string>,
};

function getUniqueOptions(
  historys: Array<HistoryType>
): Array<string> {
  if (!historys) {
    return [];
  }
  const options = historys.map(history => history.item_name);
  return options.filter(
    (value, idx, list) => list.indexOf(value) === idx
  );
}

function FilterItem(props: PropsType): React.Node {
  const { value, options, onChange } = props;
  return (
    <FormControl style={{ position: 'absolute', left: '0px' }}>
      <NativeSelect value={value} onChange={onChange} name="history">
        <option value="">全て</option>
        {options &&
          options.map(opt => <option value={opt}>{opt}</option>)}
      </NativeSelect>
    </FormControl>
  );
}

const mapStateToProps = (state: StateType) => ({
  value: state.userDetailPage.historyTab.filter,
  options: getUniqueOptions(state.data.historys),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(filterHistory(e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterItem);
