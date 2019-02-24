// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from '@material-ui/core';
import listStyles from '../TemplateManagePage/css/templateList.css';
import ListHeader from './ListHeader';
import { selectVersion } from './actions';

type PropsType = {
  versions: Array<string>,
  selectedVersion: string,
  onClick: string => void,
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
  selectedVersion: string,
  version: string
): string {
  if (selectedVersion === version) {
    return listStyles.selectedItem;
  }
  return listStyles.item;
}

function VersionList(props: PropsType): React.Node {
  const { versions, selectedVersion, onClick } = props;
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
            versions.map(version => (
              <ListItem
                className={setClassName(
                  selectedVersion,
                  version
                )}
                button
                key={version}
                onClick={() => {
                  onClick(version);
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
  selectedVersion: state.serviceManagePage.selectedVersion,
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
