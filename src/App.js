import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import store from './configureStore';
import theme from './configureTheme';
import MenuBar from './containers/Common/MenuBar';
import Menu from './containers/Common';

console.log('******** store.getState()', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Menu />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
