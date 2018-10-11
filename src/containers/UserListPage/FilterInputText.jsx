// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import InputText from '../../components/InputTextWithPlacefolder';
import type { PropsType } from '../../components/InputTextWithPlacefolder';
import styles from './css/button.css';
import { searchKeyword } from './actions';

function FilterInputText(props: PropsType): React.Node {
  return (
    <div className={styles.filterText}>
      <InputText {...props} />
    </div>
  );
}

const mapStateToProps = (state): PropsType => ({
  label: '検索',
  placeholder: 'キーワードを入力してください',
  helperText: '',
  styles: { textField: styles.filterInput__textInput },
});

const mapDispatchToProps = dispatch => ({
  onChange: (e) => {
    dispatch(searchKeyword(e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterInputText);
