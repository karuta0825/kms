import * as React from 'react';
import {
  SelectionState,
  IntegratedSelection,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  TableSelection,
} from '@devexpress/dx-react-grid-material-ui';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { selectLicense } from './actions';

type PropsType = {
  isEdit: boolean,
  rows: Array<ServiceType>,
  columns: Array<{ name: string, title: string }>,
  selection: Array<number>,
  onSelectionChange: Object => void,
  inputValues: Object,
};

const styles = () => ({
  rootContainer: {
    marginTop: '25px',
    border: '1px solid rgba(224, 224, 224, 1)',
  },
});

const CustomGridComponent = ({ classes, ...restProps }) => (
  <Grid.Root {...restProps} className={classes.rootContainer} />
);

export const CustomGrid = withStyles(styles, {
  name: 'CustomGrid',
})(CustomGridComponent);

function getUsedLicense(
  allLicense: Array<ServiceType>,
  usedInfo: Object
): Array<ServiceType> {
  const usedServiceNames = Object.keys(usedInfo).filter(
    key => usedInfo[key] === 1
  );

  return usedServiceNames.map(name =>
    allLicense.find(service => service.service_id === name)
  );
}

function TabLicense(props: PropsType): React.Node {
  const {
    isEdit,
    rows,
    columns,
    selection,
    onSelectionChange,
    inputValues,
  } = props;

  if (!isEdit) {
    return (
      <Grid
        rows={getUsedLicense(rows, inputValues)}
        columns={columns}
        rootComponent={CustomGrid}
      >
        <VirtualTable />
        <TableHeaderRow />
      </Grid>
    );
  }
  return (
    <div>
      <Grid
        rows={rows}
        columns={columns}
        rootComponent={CustomGrid}
      >
        <SelectionState
          selection={selection}
          onSelectionChange={onSelectionChange}
        />
        <IntegratedSelection />
        <VirtualTable />
        <TableHeaderRow />
        <TableSelection
          showSelectAll
          highlightRow
          selectByRowClick
        />
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  isEdit: state.userDetailPage.licenseTab.isEdit,
  rows: state.data.services.filter(
    service =>
      service.version === state.data.baseInfo.version &&
      service.is_setup_info === 0
  ),
  columns: [
    { name: 'service_id', title: 'サービスID' },
    { name: 'service_name', title: 'サービス名' },
    { name: 'sales_id', title: '型名' },
  ],
  selection: state.userDetailPage.licenseTab.selection,
  inputValues: state.userDetailPage.licenseTab.inputValues,
});

const mapDispatchToProps = dispatch => ({
  onSelectionChange: selection => {
    dispatch(selectLicense(selection));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabLicense);
