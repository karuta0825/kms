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

store.dispatch({ type: Types.HTTP_GET_SERVERS });
store.dispatch({ type: Types.HTTP_GET_SERVICES });
store.dispatch({ type: Types.HTTP_GET_MEMOTEMPLATES });
store.dispatch({ type: Types.HTTP_GET_ENVIRONMENTS });
store.dispatch({ type: Types.HTTP_GET_ACCOUNTS });
store.dispatch({ type: Types.HTTP_GET_KIDS });

export default store;
