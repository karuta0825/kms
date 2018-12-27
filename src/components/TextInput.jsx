// @flow
import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './css/TextInput.css';

export type TextInputPropsType = {
  isEdit: boolean,
  title: string,
  value: string,
  customProps: Object,
  onChange: Event => void,
  isError: boolean,
  errMsg: string,
};

const defaultEditProps = {
  style: { padding: '9px', background: '#fbfbfb' },
};

export default (props: TextInputPropsType): React.Node => {
  const {
    isEdit,
    title,
    value,
    onChange,
    customProps,
    isError,
    errMsg,
  } = props;
  const htmlProps =
    (customProps && { ...defaultEditProps, ...customProps }) ||
    defaultEditProps;

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      {isEdit && (
        <TextField
          error={isError}
          className={styles.text}
          inputProps={htmlProps}
          margin="normal"
          variant="outlined"
          value={(value && value) || ''}
          onChange={onChange}
          helperText={isError && errMsg}
        />
      )}
      {!isEdit && (
        <TextField
          className={styles.text}
          margin="normal"
          InputProps={{ readOnly: true }}
          value={(value && value) || ''}
        />
      )}
    </div>
  );
};
