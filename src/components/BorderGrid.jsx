// @flow
import * as React from 'react';
import { Grid } from '@devexpress/dx-react-grid-material-ui';
import { withStyles } from '@material-ui/core';

const styles = () => ({
  rootContainer: {
    marginTop: '25px',
    border: '1px solid rgba(224, 224, 224, 1)',
    height: '100%',
  },
});

const CustomGridComponent = ({ classes, ...restProps }) => (
  <Grid.Root {...restProps} className={classes.rootContainer} />
);

export default withStyles(styles, {
  name: 'CustomGrid',
})(CustomGridComponent);
