// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { toggleEditMode } from '../actions';

type PropsType = {
  isEdit: boolean,
  onClickSave: Event => void,
  onClickCancel: Event => void,
  onClickEdit: Event => void,
};

function Buttons(props: PropsType): React.Node {
  const {
    isEdit,
    onClickEdit,
    onClickCancel,
    onClickSave,
  } = props;
  return (
    <React.Fragment>
      {isEdit && <Button variant="contained">保存</Button>}
      {isEdit && (
        <Button variant="contained" onClick={onClickCancel}>
          キャンセル
        </Button>
      )}
      {!isEdit && (
        <Button
          variant="contained"
          color="secondary"
          onClick={onClickEdit}
        >
          編集
        </Button>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  isEdit: state.userDetailPage.licenseTab.isEdit,
});

const mapDispatchToProps = dispatch => ({
  onClickCancel: () => {
    dispatch(toggleEditMode(false, 'LICENSE'));
  },
  onClickEdit: () => {
    dispatch(toggleEditMode(true, 'LICENSE'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
