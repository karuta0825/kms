// @flow
import * as React from 'react';
import { Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import AddIcon from '@material-ui/icons/Add';

type CommandPropsType = {
  onExecute: () => void,
};

type CommandButtonPropsType = {
  id: 'add' | 'edit' | 'delete' | 'commit' | 'cancel',
  onExecute: () => void,
};

const AddButton = ({ onExecute }: CommandPropsType) => (
  <div style={{ textAlign: 'center' }}>
    <Button
      color="primary"
      onClick={onExecute}
      title="Create new row"
    >
      <AddIcon />
      新規追加
    </Button>
  </div>
);

const EditButton = ({ onExecute }: CommandPropsType) => (
  <IconButton onClick={onExecute} title="Edit row">
    <EditIcon />
  </IconButton>
);

const DeleteButton = ({ onExecute }: CommandPropsType) => (
  <IconButton onClick={onExecute} title="Delete row">
    <DeleteIcon />
  </IconButton>
);

const CommitButton = ({ onExecute }: CommandPropsType) => (
  <IconButton onClick={onExecute} title="Save changes">
    <SaveIcon />
  </IconButton>
);

const CancelButton = ({ onExecute }: CommandPropsType) => (
  <IconButton
    color="secondary"
    onClick={onExecute}
    title="Cancel changes"
  >
    <CancelIcon />
  </IconButton>
);

const commandComponents = {
  add: AddButton,
  edit: EditButton,
  delete: DeleteButton,
  commit: CommitButton,
  cancel: CancelButton,
};

export default ({
  id,
  onExecute,
}: CommandButtonPropsType): React.Node => {
  const CommandButton = commandComponents[id];
  return <CommandButton onExecute={onExecute} />;
};
