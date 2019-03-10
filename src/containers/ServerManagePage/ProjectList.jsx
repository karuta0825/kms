// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from '@material-ui/core';
import listStyles from '../TemplateManagePage/css/templateList.css';
import ListHeader from '../ServiceManagePage/ListHeader';
import { selectProject } from './actions';

type PropsType = {
  projects: Array<string>,
  selectedProject: string,
  onClick: string => void,
};

function getProjects(servers: Array<ServerType>): Array<string> {
  if (servers.length < 1) return [];
  return servers
    .map(server => server.project)
    .filter((value, idx, list) => list.indexOf(value) === idx);
}

function setClassName(
  selectedProject: string,
  project: string
): string {
  if (selectedProject === project) {
    return listStyles.selectedItem;
  }
  return listStyles.item;
}

function ProjectList(props: PropsType): React.Node {
  const { projects, selectedProject, onClick } = props;
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
          {projects.length > 0 &&
            projects.map(project => (
              <ListItem
                className={setClassName(selectedProject, project)}
                button
                key={project}
                onClick={() => {
                  onClick(project);
                }}
              >
                {project}
              </ListItem>
            ))}
        </List>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state: StateType) => ({
  projects: getProjects(state.data.servers),
  selectedProject: state.serverManagePage.selectedProject,
});

const mapDispatchToProps = dispatch => ({
  onClick: projectName => {
    dispatch(selectProject(projectName));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList);
