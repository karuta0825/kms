// @flow
import * as React from 'react';
import InputCompany from './InputCompany';
import InputName from './InputName';
import InputTel from './InputTel';
import InputEmail from './InputEmail';

export default function EMInfo(): React.Node {
  return (
    <React.Fragment>
      <span>緊急連絡先</span>
      <InputCompany />
      <InputName />
      <InputTel />
      <InputEmail />
    </React.Fragment>
  );
}
