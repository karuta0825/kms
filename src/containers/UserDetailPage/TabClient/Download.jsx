// @flow
import * as React from 'react';
import { Button } from '@material-ui/core';
import {
  makeBlobFromObj,
  injectHTMLDownloadTrigger,
} from '../../../utils/download';

export default class Download extends React.Component {
  handleClick = () => {
    const ahref = this.download;
    const blob = makeBlobFromObj({
      one: 'first',
      two: 'second',
    });
    injectHTMLDownloadTrigger(ahref, blob, 'test.txt');
    ahref.click();
  };

  download: HTMLElement;

  render(): React.Node {
    return (
      <div>
        <Button onClick={this.handleClick}>ダウンロード</Button>
        <a
          href="#"
          style={{ display: 'none' }}
          ref={input => {
            this.download = input;
          }}
        >
          りんく
        </a>
      </div>
    );
  }
}
