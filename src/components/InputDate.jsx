// @flow
import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './css/TextInput.css';

type PropsType = {
  isEdit: boolean,
  title: string,
  value: string,
  onChange: Event => void,
};

export default (props: PropsType): React.Node => {
  const { isEdit, title, value, onChange } = props;
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      {isEdit && (
        <TextField
          className={styles.text}
          type="date"
          inputProps={{
            style: {
              padding: '9px',
              background: '#fbfbfb',
              fontSize: '12.5px',
            },
          }}
          margin="normal"
          variant="outlined"
          value={(value && value) || ''}
          onChange={onChange}
        />
      )}
      {!isEdit && (
        <TextField
          className={styles.text}
          type="date"
          margin="normal"
          InputProps={{ readOnly: true }}
          inputProps={{
            style: { fontSize: '12.5px' },
          }}
          value={(value && value) || ''}
        />
      )}
    </div>
  );
};
