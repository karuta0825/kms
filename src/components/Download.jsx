// @flow
import * as React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { injectHTMLDownloadTrigger } from '../utils/download';

type PropsType = {
  isChecked: boolean,
  label: string,
  onChange: Event => void,
  blob: Blob,
  filename: string,
  canDownload: boolean,
};

export default class Download extends React.Component<PropsType> {
  execDownload = () => {
    const { blob, filename } = this.props;
    const ahref = this.download;
    if (ahref === null) {
      return;
    }
    injectHTMLDownloadTrigger(ahref, blob, filename);
    ahref.click();
  };

  download: HTMLAnchorElement | null;

  render(): React.Node {
    const {
      isChecked,
      label,
      onChange,
      canDownload,
    } = this.props;
    if (canDownload && isChecked) {
      this.execDownload();
    }
    return (
      <div>
        <FormControlLabel
          control={
            <Checkbox checked={isChecked} onChange={onChange} />
          }
          label={label}
        />
        <a
          href="#download"
          style={{ display: 'none' }}
          ref={input => {
            this.download = input;
          }}
        >
          ダウンロード
        </a>
      </div>
    );
  }
}
