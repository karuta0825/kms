// @flow
import * as React from 'react';
import Button from '@material-ui/core/Button';

const Buttons = (props) => {
  const { isEdit } = props;
  return (
    { isEdit && <Button variant="contained">保存</Button> }
    { !isEdit && <Button variant="contained" color="secondary">編集</Button> }
    { isEdit && <Button variant="contained">キャンセル</Button> }
  );
}
