// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import styles from './css/modal.css';
import { selectTemplate } from './actions';

type PropsType = {
  value: string,
  options: Array<MemoTemplateType>,
  onChange: Event => void,
};

function SelectTemplate(props: PropsType): React.Node {
  const { value, options, onChange } = props;
  return (
    <FormControl className={styles.template}>
      <InputLabel shrink>テンプレート</InputLabel>
      <Select value={value} onChange={onChange}>
        <MenuItem value="">
          <em>なし</em>
        </MenuItem>
        {options.map(option => (
          <MenuItem value={option.title} key={option.id}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

const mapStateToProps = (state: StateType) => ({
  options: state.data.memoTemplates,
  value: state.userDetailPage.memo.selectedTemplate,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(selectTemplate(e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectTemplate);
