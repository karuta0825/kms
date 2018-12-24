// @flow
/**
 * 入力チェック用の関数を外部から受け取れるよう
 */
import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './css/TextInput.css';
import { convertStN } from '../utils';

type PropsType = {
  isEdit: boolean,
  title: string,
  value: string,
  customProps: Object,
  onChange: Event => void,
};

const defaultEditProps = {
  style: { padding: '9px', background: '#fbfbfb' },
};

export default (props: PropsType): React.Node => {
  const { isEdit, title, value, customProps, onChange } = props;
  const htmlProps =
    (customProps && { ...defaultEditProps, ...customProps }) ||
    defaultEditProps;
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      {isEdit && (
        <TextField
          className={styles.text}
          inputProps={htmlProps}
          margin="normal"
          type="number"
          variant="outlined"
          value={(value && convertStN(value)) || ''}
          onChange={onChange}
        />
      )}
      {!isEdit && (
        <TextField
          className={styles.text}
          margin="normal"
          type="number"
          InputProps={{ readOnly: true }}
          value={(value && convertStN(value)) || ''}
        />
      )}
    </div>
  );
};
