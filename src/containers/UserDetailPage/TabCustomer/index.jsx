// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import frameStyles from '../css/tab.css';
import InputAddress from './InputAddress';
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
import ButtonsEdit from './ButtonsEdit';
import ButtonsNew from './ButtonsNew';
import SwitchNewContract from './SwitchNewContract';
import SwitchReplaceFromCJ from './SwitchReplaceFromCJ';
import SwitchReplaceFromWC from './SwitchReplaceFromWC';
import SwitchReplaceFromAnother from './SwitchReplaceFromAnother';
import SwitchQA from './SwitchQA';
import CategoryName from '../../../components/CategoryName';

type PropsType = {
  isAddBaseMode: boolean,
};

function TabCustomer(props: PropsType): React.Node {
  const { isAddBaseMode } = props;
  return (
    <div className={styles.container}>
      <CustomerList />
      <div className={styles.customerDetail}>
        <div className={frameStyles.action}>
          {!isAddBaseMode && <ButtonsEdit />}
          {isAddBaseMode && <ButtonsNew />}
        </div>
        <div className={frameStyles.body}>
          <CategoryName name="基本情報" />
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
          <SwitchQA />
          <CategoryName name="契約情報" />
          <SwitchNewContract />
          <SwitchReplaceFromCJ />
          <SwitchReplaceFromWC />
          <SwitchReplaceFromAnother />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: StateType) => ({
  isAddBaseMode: state.userDetailPage.customerTab.isAddBaseMode,
});

export default connect(mapStateToProps)(TabCustomer);
