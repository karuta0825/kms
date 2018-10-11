// @flow
import { connect } from 'react-redux';
import InputTextWithPlacefolder from '../../components/InputTextWithPlacefolder';
import styles from './css/index.css';
import { inputKid } from './actions';

const mapStateToProps = state => ({
  label: 'KIDの指定',
  placeholder: 'KIDを入力してください',
  helperText: '数値のみ ex)40000',
  styles,
});

const mapDispatchToProps = dispatch => ({
  onChange: (e) => {
    dispatch(inputKid(e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputTextWithPlacefolder);
