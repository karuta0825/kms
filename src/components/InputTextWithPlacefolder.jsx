// @flow
import * as React from 'react';
import TextField from '@material-ui/core/TextField';

export type PropsType = {
  label: string,
  placeholder: string,
  helperText: string,
  styles: { textField: string },
  onChange: (Event) => void,
};

const InputTextWithPlacefolder = (props: PropsType): React.Node => {
  const {
    label,
    placeholder,
    helperText,
    styles,
    onChange,
  } = props;
  return (
    <TextField
      label={label}
      className={styles.textField}
      placeholder={placeholder}
      helperText={helperText}
      margin="normal"
      onChange={onChange}
    />
  );
};

export default InputTextWithPlacefolder;
