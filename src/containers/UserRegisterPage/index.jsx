// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import ProgressModal from './ProgressModal';
import styles from './css/UserRegister.css';
import { registerUser, canUpload } from './actions';

type sentence = string;
type PropsType = {
  canUploadFile: boolean,
  onDrop: (SyntheticDragEvent<any>) => void,
  onClick: (Event) => void,
};


function getLineList(fileReader: FileReader): Array<sentence> {
  const { result } = fileReader;
  const lineCode = result.indexOf('\r') === -1 ? '\n' : '\r\n';
  const lines = result.split(lineCode);
  return lines;
}

function UserRegister(props: PropsType): React.Node {
  const { canUploadFile, onDrop, onClick } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Button
          variant="contained"
          color="primary"
          className={styles.uploadBtn}
          disabled={!canUploadFile}
          onClick={onClick}
        >
          アップロード
        </Button>
      </div>
      <div
        className={styles.uploadTarget}
        onDragOver={event => event.preventDefault()}
        onDrop={onDrop}
      >
        <InsertDriveFile
          className={styles.uploadIcon}
          color="inherit"
        />
        <div className={styles.uploadDescription}>
          ここにファイルをドラッグ＆ドロップしてください
        </div>
      </div>
      <ProgressModal />
    </div>
  );
}

const mapStateToProps = state => ({
  canUploadFile: state.userRegisterPage.canUploadFile,
});

const mapDispatchToProps = dispatch => ({
  onDrop: (e: SyntheticDragEvent<any>) => {
    e.stopPropagation();
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const r = new FileReader();
    r.readAsText(file);
    r.onload = () => {
      const lines = getLineList(r);
      // linesに対して入力チェックで、dispatchの分岐
      dispatch(canUpload(true));
    };
  },
  onClick: () => {
    dispatch(registerUser());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserRegister);
