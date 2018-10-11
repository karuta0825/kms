import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import initState from './initState';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  initState,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ),
);

store.subscribe(() =>
  console.log(store.getState())
);

sagaMiddleware.run(rootSaga);

store.dispatch({ type: 'FETCH_KIDS' });

export default store;
