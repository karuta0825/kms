import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import initState from './initState';
import rootSaga from './sagas';
import {
  FETCH_KIDS,
  FETCH_SERVERS,
  FETCH_ENVIRONMENTS,
} from './constants/ActionTypes';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  initState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

store.subscribe(() => console.log(store.getState()));

sagaMiddleware.run(rootSaga);

store.dispatch({ type: FETCH_KIDS });
store.dispatch({ type: FETCH_SERVERS });
store.dispatch({ type: FETCH_ENVIRONMENTS });

export default store;
