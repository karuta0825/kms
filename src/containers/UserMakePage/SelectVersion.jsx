// @flow
import { connect } from 'react-redux';
import {
  selectVersion,
} from './actions';
import SelectWithPlacefolder from '../../components/SelectWithPlacefolder';
import styles from './css/index.css';
import { getUniqueItemByKey } from '../../utils';

import { type Environment } from '../../data/environments';

const getUniqueVersion = (environments: Array<Environment>) => (
  getUniqueItemByKey(environments, 'version')
    .map(item => (
      { id: item.id, name: item.version, value: item.version }
    ))
);

const mapStateToProps = state => ({
  title: 'バージョン',
  choices: getUniqueVersion(state.data.environments),
  classes: styles,
  name: '',
  value: state.userMakePage.inputValues.version,
});

const mapDispatchToProps = dispatch => ({
  handleChange: (e) => {
    dispatch(selectVersion(e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectWithPlacefolder);
