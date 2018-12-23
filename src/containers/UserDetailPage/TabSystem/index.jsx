// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import styles from '../css/tab.css';
import TextInput from '../../../components/TextInput';
import { toggleEditMode } from '../actions';

type PropsType = {
  isEdit: boolean,
  onClickSave: (Event) => void,
  onClickCancel: (Event) => void,
  onClickEdit: (Event) => void,
};

function TabSystem(props: PropsType): React.Node {
  const {
    isEdit,
    onClickSave,
    onClickCancel,
    onClickEdit,
  } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.action}>
        { isEdit && <Button variant="contained">保存</Button> }
        { isEdit && <Button variant="contained" onClick={onClickCancel}>キャンセル</Button> }
        { !isEdit && <Button variant="contained" color="secondary" onClick={onClickEdit}>編集</Button> }
      </div>
      <div className={styles.body}>
        <TextInput isEdit={isEdit} title="KID" value="editing" />
        <TextInput isEdit={isEdit} title="タイトル" value="editing" />
        <TextInput isEdit={isEdit} title="タイトル" value="editing" />
        <TextInput isEdit={isEdit} title="タイトル" value="editing" />
        <TextInput isEdit={isEdit} title="タイトル" value="editing" />
        <TextInput isEdit={isEdit} title="タイトル" value="editing" />
        <TextInput isEdit={isEdit} title="タイトル" value="editing" />
        <TextInput isEdit={isEdit} title="タイトル" value="read-only" />
        <TextInput isEdit={isEdit} title="タイトル" value="read-only" />
        <TextInput isEdit={isEdit} title="タイトル" value="read-only" />
        <TextInput isEdit={isEdit} title="タイトル" value="read-only" />
        <TextInput isEdit={isEdit} title="タイトル" value="read-only" />
        <TextInput isEdit={isEdit} title="タイトル" value="read-only" />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
});

const mapDispatchToProps = dispatch => ({
  onClickCancel: () => {
    dispatch(toggleEditMode(false, 'SYSTEM'));
  },
  onClickEdit: () => {
    dispatch(toggleEditMode(true, 'SYSTEM'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabSystem);
