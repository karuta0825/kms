// @flow
import * as React from 'react';
import InputCircuitName from './InputCircuitName';
import InputCircuitService from './InputCircuitService';
import InputNetworkAddress from './InputNetworkAddress';
import InputSubnet from './InputSubnet';
import InputRouter from './InputRouter';
import InputOpenDate from './InputOpenDate';
import InputVirtualDownloadSrvIP from './InputVirtualDownloadSrvIP';
import SwitchSXRJ from './SwitchSXRJ';
import InputSXIP from './InputSXIP';
import InputAuthSrv from './InputAuthSrv';
import SwitchRX from './SwitchRX';
import SwitchMobile from './SwitchMobile';
import InputClientIPs from './InputClientIPs';
import InputRXIP from './InputRXIP';

export default function ESInfo(): React.Node {
  return (
    <React.Fragment>
      <InputCircuitName />
      <InputCircuitService />
      <InputOpenDate />
      <InputNetworkAddress />
      <InputSubnet />
      <InputRouter />
      <InputVirtualDownloadSrvIP />
      <SwitchSXRJ />
      <InputSXIP />
      <SwitchRX />
      <InputRXIP />
      <SwitchMobile />
      <InputAuthSrv />
      <InputClientIPs />
    </React.Fragment>
  );
}
