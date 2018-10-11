// @flow
import { connect } from 'react-redux';
import styles from './css/index.css';
import { selectSystemType } from './actions';
import SelectWithPlacefolder from '../../components/SelectWithPlacefolder';
import { getUniqueItemByKey } from '../../utils';
import { type Environment } from '../../data/environments';

const getUniqueSystemType = (environments: Array<Environment>) => (
  getUniqueItemByKey(environments, 'name').map(item => (
    { id: item.id, name: item.name, value: item.system_type }
  ))
);

const mapStateToProps = state => ({
  title: 'システム環境',
  choices: getUniqueSystemType(state.data.environments),
  classes: styles,
  name: '',
  value: state.userMakePage.inputValues.systemType,
});

const mapDispatchToProps = dispatch => ({
  handleChange: (e) => {
    dispatch(selectSystemType(e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectWithPlacefolder);
