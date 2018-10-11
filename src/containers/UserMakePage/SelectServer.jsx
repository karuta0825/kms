// @flow
import { connect } from 'react-redux';
import {
  selectServer,
} from './actions';
import SelectWithPlacefolder from '../../components/SelectWithPlacefolder';
import styles from './css/index.css';
import { getUniqueItemByKey } from '../../utils';

const getUniqueServer = (servers, version) => (
  getUniqueItemByKey(servers, 'name')
    .filter(value => (
      value.version === version && value.type === 'AP'
    ))
    .map(item => (
      { id: item.id, name: item.name, value: item.name }
    ))
);

const mapStateToProps = state => ({
  title: 'サーバ',
  choices: ['', ...getUniqueServer(state.data.servers, state.userMakePage.inputValues.version)],
  classes: styles,
  name: '',
  value: state.userMakePage.inputValues.server,
});

const mapDispatchToProps = dispatch => ({
  handleChange: (e) => {
    dispatch(selectServer(e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectWithPlacefolder);
