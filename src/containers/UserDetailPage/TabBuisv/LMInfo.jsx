// @flow
import * as React from 'react';
import InputCircuitName from './InputCircuitName';
import InputCircuitService from './InputCircuitService';
import InputNetworkAddress from './InputNetworkAddress';
import InputSubnet from './InputSubnet';
import InputRouter from './InputRouter';
import InputOpenDate from './InputOpenDate';
import SelectSX from './SwitchSX';
import InputHowSx from './InputHowSx';
import SwitchL3 from './SwitchL3';
import InputSXIP from './InputSXIP';
import SwitchCarte from './SwitchCarte';
import InputCarteName from './InputCarteName';
import InputCarteHtmlIP from './InputCarteHtmlIP';
import SwitchCC from './SwitchCC';
import InputCCIP from './InputCCIP';
import InputDownloadSrv from './InputDownloadSrv';
import InputAuthSrv from './InputAuthSrv';

export default function LMInfo(): React.Node {
  return (
    <React.Fragment>
      <InputCircuitName />
      <InputCircuitService />
      <InputOpenDate />
      <InputNetworkAddress />
      <InputSubnet />
      <InputRouter />
      <SelectSX />
      <InputHowSx />
      <SwitchL3 />
      <InputSXIP />
      <SwitchCarte />
      <InputCarteName />
      <InputCarteHtmlIP />
      <SwitchCC />
      <InputCCIP />
      <InputDownloadSrv />
      <InputAuthSrv />
    </React.Fragment>
  );
}
