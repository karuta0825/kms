// @flow
import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import _ from 'underscore';
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
  style: {
    padding: '9px',
    background: '#fbfbfb',
    fontSize: '12.5px',
  },
};

export default (props: PropsType): React.Node => {
  const { isEdit, title, value, customProps, onChange } = props;
  const htmlProps =
    (customProps && { ...defaultEditProps, ...customProps }) ||
    defaultEditProps;

  let v = '';
  if (_.isNumber(value)) {
    v = value;
  }
  if (_.isString(value)) {
    v = convertStN(value);
  }

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
          value={v}
          onChange={onChange}
        />
      )}
      {!isEdit && (
        <TextField
          className={styles.text}
          margin="normal"
          type="number"
          InputProps={{ readOnly: true }}
          inputProps={{
            style: { fontSize: '12.5px' },
          }}
          value={v}
        />
      )}
    </div>
  );
};
