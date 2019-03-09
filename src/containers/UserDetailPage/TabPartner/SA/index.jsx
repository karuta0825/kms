// @flow
import * as React from 'react';
import InputPID from './InputPID';
import InputCompany from './InputCompany';
import InputPostal from './InputPostal';
import InputAddress from './InputAddress';
import InputAffliation from './InputAffliation';
import InputKana from './InputKana';
import InputName from './InputName';
import InputTel from './InputTel';
import InputFax from './InputFax';
import InputEmail from './InputEmail';

export default function SAInfo(): React.Node {
  return (
    <React.Fragment>
      <span>SA情報</span>
      <InputPID />
      <InputCompany />
      <InputPostal />
      <InputAddress />
      <InputAffliation />
      <InputKana />
      <InputName />
      <InputTel />
      <InputFax />
      <InputEmail />
    </React.Fragment>
  );
}
