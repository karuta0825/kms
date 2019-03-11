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
  onClick: Event => void,
};

function getLineList(fileReader: FileReader): Array<sentence> {
  const { result } = fileReader;
  const lineCode = result.indexOf('\r') === -1 ? '\n' : '\r\n';
  const lines = result.split(lineCode);
  return lines.filter(line => line !== '' && line.indexOf('#') !== 0);
}

function setLicenseInfo(obj, services, version) {
  const replace = {};
  const { kids, licenses, customers, ...rest } = obj;
  const clients = { number: 1 };
  const mobiles = { number: 1 };
  kids.number_pc = 1;
  Object.keys(licenses).forEach(key => {
    const item = services.find(
      service =>
        service.sales_id === key && service.version === version
    );
    if (item && item.is_setup_info !== 1) {
      replace[item.service_id] = licenses[key];
    } else {
      // ネットワーク
      if (item && item.service_id === 'has_busiv') {
        customers.has_busiv = licenses[key] === 1 ? 1 : 0;
        customers.has_fenics = licenses[key] === 1 ? 0 : 1;
      }

      // モバイル使用
      if (item && item.service_id === 'has_sd') {
        replace.K1 = 1;
        customers.has_mobile = licenses[key];
      }

      // 追加1クライアント数
      if (item && item.service_id === 'add_one_cli') {
        kids.number_pc += Number(licenses[key]);
      }

      // 追加10クライアント数
      if (item && item.service_id === 'add_ten_cli') {
        kids.number_pc += 10 * Number(licenses[key]);
      }

      // 追加20クライアント数
      if (item && item.service_id === 'add_twe_cli') {
        kids.number_pc += 20 * Number(licenses[key]);
      }

      // 追加ユーザー
      if (item && item.service_id === 'add_one_usr') {
        clients.number += licenses[key];
      }

      if (item && item.service_id === 'add_sd') {
        mobiles.number = licenses[key];
      }
    }
  });
  console.log(obj);
  console.log({
    kids,
    clients,
    mobiles,
    customers,
    ...rest,
    licenses: replace,
  });
}

function makeUploadData(lines: Array<sentence>): Object {
  const obj = {};
  lines.forEach(line => {
    const delimiterPosition = line.indexOf(':');
    const key = line.slice(0, delimiterPosition);
    const value = line.slice(delimiterPosition + 1);
    const [table, field] = key.split('__');
    obj[table] = obj[table] || {};
    obj[table][field.trim()] = value.trim();
  });
  return obj;
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

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = (state: StateType, { dispatch }) => ({
  canUploadFile: state.userRegisterPage.canUploadFile,
  onDrop: (e: SyntheticDragEvent<any>) => {
    e.stopPropagation();
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const r = new FileReader();
    r.readAsText(file);
    r.onload = () => {
      const lines = getLineList(r);
      const [kid, ...last] = lines;

      // 存在しないKIDは登録できない
      const [user] = state.data.kids.filter(r => r.kid === kid);
      if (!user || !user.kid) {
        console.log('存在しないぞ');
      }

      // 上書き登録はできない
      if (user.is_registered === 1) {
        console.log('二度目の登録はできません');
      }

      const prepareObj = makeUploadData(last);
      const obj = setLicenseInfo(
        prepareObj,
        state.data.services,
        user.version
      );

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
  mergeProps
)(UserRegister);
