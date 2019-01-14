// @flow
import * as React from 'react';
import InputCircuitName from './InputCircuitName';
import InputCircuitService from './InputCircuitService';
import InputNetworkAddress from './InputNetworkAddress';
import InputSubnet from './InputSubnet';
import InputRouter from './InputRouter';
import InputOpenDate from './InputOpenDate';

export default function LMInfo(): React.Node {
  return (
    <React.Fragment>
      <InputCircuitName />
      <InputCircuitService />
      <InputOpenDate />
      <InputNetworkAddress />
      <InputSubnet />
      <InputRouter />
    </React.Fragment>
  );
}
