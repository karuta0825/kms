// @flow
import * as React from 'react';
import TextField from '@material-ui/core/TextField';

export type PropsType = {
  label: string,
  value: string,
  placeholder: string,
  helperText: string,
  styles: { textField: string },
  onChange: (Event) => void,
};

const InputTextWithPlacefolder = (props: PropsType): React.Node => {
  const {
    label,
    value,
    placeholder,
    helperText,
    styles,
    onChange,
  } = props;
  return (
    <TextField
      label={label}
      value={value}
      className={styles.textField}
      placeholder={placeholder}
      helperText={helperText}
      margin="normal"
      onChange={onChange}
    />
  );
};

export default InputTextWithPlacefolder;
