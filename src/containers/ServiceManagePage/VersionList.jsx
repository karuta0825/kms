// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from '@material-ui/core';
import listStyles from '../TemplateManagePage/css/templateList.css';
import ListHeader from './ListHeader';
import { selectVersion } from './actions';

type PropsType = {
  versions: Array<string>,
  selectedIndex: number,
  onClick: number => void,
};

function getVersions(
  services: Array<ServiceType>
): Array<string> {
  if (services.length < 1) return [];
  return services
    .map(service => service.version)
    .filter((value, idx, list) => list.indexOf(value) === idx);
}

function setClassName(
  selectedIndex: number,
  idx: number
): string {
  if (selectedIndex === idx) {
    return listStyles.selectedItem;
  }
  return listStyles.item;
}

function VersionList(props: PropsType): React.Node {
  const { versions, selectedIndex, onClick } = props;
  return (
    <React.Fragment>
      <div className={listStyles.header}>
        <ListHeader />
      </div>
      <div
        style={{
          height: 'calc(100% - 51px)',
          background: 'white',
          overflowY: 'scroll',
        }}
      >
        <List style={{ padding: 0 }}>
          {versions.length > 0 &&
            versions.map((version, idx) => (
              <ListItem
                className={setClassName(selectedIndex, idx)}
                button
                key={version}
                onClick={() => {
                  onClick(idx);
                }}
              >
                {version}
              </ListItem>
            ))}
        </List>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state: StateType) => ({
  versions: getVersions(state.data.services),
  selectedIndex: state.serviceManagePage.selectedIndex,
});

const mapDispatchToProps = dispatch => ({
  onClick: idx => {
    dispatch(selectVersion(idx));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VersionList);
