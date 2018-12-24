// @flow
import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './css/NumberInputWithBtn.css';

type PropsType = {
  isEdit: boolean,
  title: string,
  value: number | string,
  customProps: Object,
  onChange: Event => void,
  onClickAdd: Event => void,
  onClickDel: Event => void,
  inputCheck?: (
    number | string
  ) => { isError: boolean, msg: string },
};

const defaultEditProps = {
  style: { padding: '9px', background: '#fbfbfb' },
};

export default (props: PropsType): React.Node => {
  const {
    isEdit,
    title,
    value,
    customProps,
    onChange,
    onClickAdd,
    onClickDel,
    inputCheck,
  } = props;

  const htmlProps =
    (customProps && { ...defaultEditProps, ...customProps }) ||
    defaultEditProps;

  const { isError, msg } = (inputCheck && inputCheck(value)) || {
    isError: false,
    msg: '',
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      {isEdit && (
        <TextField
          error={isError}
          className={styles.input}
          inputProps={htmlProps}
          margin="normal"
          type="number"
          variant="outlined"
          value={value}
          onChange={onChange}
          helperText={isError && msg}
        />
      )}
      {!isEdit && (
        <TextField
          className={styles.input}
          margin="normal"
          type="number"
          InputProps={{ readOnly: true }}
          value={value}
        />
      )}
      {isEdit && (
        <button
          type="button"
          className={`${styles.btn} ${styles.delBtn}`}
          onClick={onClickDel}
        >
          -
        </button>
      )}

      {isEdit && (
        <button
          type="button"
          className={`${styles.btn} ${styles.addBtn}`}
          onClick={onClickAdd}
        >
          +
        </button>
      )}
    </div>
  );
};
