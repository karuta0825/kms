import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import styles from './css/button.css';

type PropsType = {
  onClick: Event => void,
};

function DownloadButton(props: PropsType): React.Node {
  const { onClick } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      className={styles.download}
      onClick={onClick}
    >
      <CloudDownloadIcon className={styles.buttonIcon} />
      ダウンロード
    </Button>
  );
}

const mapDispatchToProp = dispatch => ({
  onClick: () => {
    console.log('clicked');
  },
});

export default connect(
  null,
  mapDispatchToProp
)(DownloadButton);
