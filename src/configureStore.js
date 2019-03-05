import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import initState from './initState';
import rootSaga from './sagas';
import * as Types from './constants/ActionTypes';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  initState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

store.subscribe(() => console.log(store.getState()));

sagaMiddleware.run(rootSaga);

store.dispatch({
  type: Types.HTTP_GET,
  payload: {
    key: 'kids',
    options: {
      endpoint: `/api/v1/kids/id`,
    },
  },
});
store.dispatch({
  type: Types.HTTP_GET,
  payload: {
    key: 'servers',
    options: {
      endpoint: `/api/v1/servers`,
    },
  },
});
store.dispatch({
  type: Types.HTTP_GET,
  payload: {
    key: 'environments',
    options: {
      endpoint: `/api/v1/environments`,
    },
  },
});
store.dispatch({
  type: Types.HTTP_GET,
  payload: {
    key: 'services',
    options: {
      endpoint: `/api/v1/services`,
    },
  },
});
store.dispatch({
  type: Types.HTTP_GET,
  payload: {
    key: 'memoTemplates',
    options: {
      endpoint: `/api/v1/memoTemplates`,
    },
  },
});

export default store;
