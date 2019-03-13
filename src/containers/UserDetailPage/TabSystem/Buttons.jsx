// @flow
import * as React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { toggleEditMode } from '../actions';
import { putKids } from './actions';

type PropsType = {
  isEdit: boolean,
  isError: boolean,
  onClickSave: Event => void,
  onClickCancel: Event => void,
  onClickEdit: Event => void,
};

const Buttons = (props: PropsType): React.Node => {
  const {
    isEdit,
    isError,
    onClickSave,
    onClickCancel,
    onClickEdit,
  } = props;
  return (
    <React.Fragment>
      {isEdit && (
        <Button
          variant="contained"
          onClick={onClickSave}
          disabled={isError}
        >
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
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = (state: StateType, { dispatch }) => ({
  isEdit: state.userDetailPage.baseInfoTab.isEdit,
  isError: Object.values(
    state.userDetailPage.baseInfoTab.isInputError
  ).some(v => v === true),
  onClickCancel: () => {
    dispatch(toggleEditMode(false, 'BASEINFO'));
  },
  onClickEdit: () => {
    dispatch(toggleEditMode(true, 'BASEINFO'));
  },
  onClickSave: () => {
    const { inputValues } = state.userDetailPage.baseInfoTab;
    const cache = state.data.baseInfo;
    const {
      id,
      register_on,
      end_on,
      kid,
      user_name,
      server,
      dbserver,
      userkey,
      db_password,
      fenics_key,
      client_number,
      fenics_number,
      busiv_number,
      version,
      start_id,
      number_id,
    } = inputValues;
    const values = {
      kid: kid.replace(/[^0-9]/g, ''),
      register_on,
      end_on,
      user_name,
      server,
      dbserver,
      userkey,
      db_password,
      fenics_key,
      busiv_number,
      number_id,
      start_id,
    };
    const diff = {
      clients: client_number - cache.client_number,
      fenicses: fenics_number - cache.fenics_number,
    };
    dispatch(putKids({ kids_id: id, inputValues: values, diff }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Buttons);
