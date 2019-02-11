// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from '@material-ui/core';
import listStyles from './css/templateList.css';
import { selectTemplate } from './actions';
import ListHeader from './ListHeader';

type PropsType = {
  templates: Array<MemoTemplateType>,
  selectedIndex: number,
  onClick: number => void,
};

function setClassName(
  selectedIndex: number,
  idx: number
): string {
  if (selectedIndex === idx) {
    return listStyles.selectedItem;
  }
  return listStyles.item;
}

function TemplateList(props: PropsType): React.Node {
  const { templates, selectedIndex, onClick } = props;
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
          {templates &&
            templates.map((template, idx) => (
              <ListItem
                className={setClassName(selectedIndex, idx)}
                button
                key={template.id}
                onClick={() => {
                  onClick(idx);
                }}
              >
                {template.title}
              </ListItem>
            ))}
        </List>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state: StateType) => ({
  templates: state.data.memoTemplates,
  selectedIndex: state.templateManagePage.selectedIndex,
});

const mapDispatchToProps = dispatch => ({
  onClick: idx => {
    dispatch(selectTemplate(idx));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplateList);
