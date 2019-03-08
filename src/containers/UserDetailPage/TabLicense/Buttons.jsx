// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { toggleEditMode } from '../actions';
import { putLicenses } from './actions';

type PropsType = {
  isEdit: boolean,
  onClickSave: Event => void,
  onClickCancel: Event => void,
  onClickEdit: Event => void,
};

function Buttons(props: PropsType): React.Node {
  const { isEdit, onClickEdit, onClickCancel, onClickSave } = props;
  return (
    <React.Fragment>
      {isEdit && (
        <Button variant="contained" onClick={onClickSave}>
          保存
        </Button>
      )}
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

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = (state: StateType, { dispatch }) => ({
  isEdit: state.userDetailPage.licenseTab.isEdit,
  onClickCancel: () => {
    dispatch(toggleEditMode(false, 'LICENSE'));
  },
  onClickEdit: () => {
    dispatch(toggleEditMode(true, 'LICENSE'));
  },
  onClickSave: () => {
    const data = {};
    const { selection } = state.userDetailPage.licenseTab;
    const kids_id = state.data.baseInfo.id;
    if (selection.length > 0) {
      selection.forEach(service => {
        data[service] = '1';
      });
      dispatch(putLicenses(kids_id, data));
    } else {
      dispatch(putLicenses(kids_id, {}));
    }
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Buttons);
