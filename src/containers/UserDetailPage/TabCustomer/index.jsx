// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import frameStyles from '../css/tab.css';
import InputAddress from './InputAddress';
import { toggleEditMode } from '../actions';
import styles from './css/index.css';
import CustomerList from './CustomerList';
import InputAffliation from './InputAffliation';
import InputPostal from './InputPostal';
import InputOwner from './InputOwner';
import InputTel from './InputTel';
import InputFax from './InputFax';
import InputEmail from './InputEmail';
import SwitchFenics from './SwitchFenics';
import SwitchBusiv from './SwitchBusiv';
import SwitchMobile from './SwitchMobile';
import InputBaseName from './InputBaseName';

type PropsType = {
  isEdit: boolean,
  onClickSave: Event => void,
  onClickCancel: Event => void,
  onClickEdit: Event => void,
};

function TabCustomer(props: PropsType): React.Node {
  const { isEdit, onClickEdit, onClickCancel } = props;
  return (
    <div className={styles.container}>
      <CustomerList />
      <div className={styles.customerDetail}>
        <div className={frameStyles.action}>
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
        </div>
        <div className={frameStyles.body}>
          <InputBaseName />
          <InputPostal />
          <InputAddress />
          <InputAffliation />
          <InputOwner />
          <InputTel />
          <InputFax />
          <InputEmail />
          <SwitchFenics />
          <SwitchBusiv />
          <SwitchMobile />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  isEdit: state.userDetailPage.customerTab.isEdit,
});

const mapDispatchToProps = dispatch => ({
  onClickCancel: () => {
    dispatch(toggleEditMode(false, 'CUSTOMER'));
  },
  onClickEdit: () => {
    dispatch(toggleEditMode(true, 'CUSTOMER'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabCustomer);
