import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import store from './configureStore';
import theme from './configureTheme';
import MenuBar from './containers/Common/MenuBar';

console.log('******** store.getState()', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <div style={{ height: '100%' }}>
        <MenuBar />
      </div>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
