// @flow
import * as React from 'react';
import { Paper, Button } from '@material-ui/core';
import ServiceTable from './ServiceTable';

type PropsType = {};

export default function Editor(props: PropsType): React.Node {
  return (
    <React.Fragment>
      <div
        style={{
          width: '90%',
          margin: '30px auto',
          height: 'calc(100% - 60px)',
          minWidth: '500px',
          background: 'white',
        }}
      >
        <ServiceTable />
      </div>
    </React.Fragment>
  );
}
