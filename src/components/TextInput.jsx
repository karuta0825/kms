// @flow
import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './css/TextInput.css';

type PropsType = {
  isEdit: boolean,
  title: string,
  value: string,
  customProps?: Object,
  onChange: Event => void,
  inputCheck: any => { isError: boolean, msg: string },
};

const defaultEditProps = {
  style: { padding: '9px', background: '#fbfbfb' },
};

export default (props: PropsType): React.Node => {
  const {
    isEdit,
    title,
    value,
    onChange,
    inputCheck,
    customProps,
  } = props;
  const { isError, msg } = (inputCheck && inputCheck(value)) || {
    isError: false,
    msg: '',
  };
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
          helperText={isError && msg}
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