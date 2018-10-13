// @flow
import { delay } from 'redux-saga';
import {
  takeEvery,
  call,
  put,
  select,
} from 'redux-saga/effects';
import {
  POST_MAKE_USER,
  POST_REGISTER_USER,
  SUCCESSED_MAKE_USER,
  SUCCESSED_REGISTER_USER,
  SUCCESSED_FETCH_KIDS,
  SUCCESSED_FETCH_ENVIRONMENTS,
  SUCCESSED_FETCH_SERVERS,
  FAILED_MAKE_USER,
  FAILED_REGISTER_USER,
  FAILED_FETCH_KIDS,
  FAILED_FETCH_ENVIRONMENTS,
  FAILED_FETCH_SERVERS,
  FETCH_KIDS,
  FETCH_ENVIRONMENTS,
  FETCH_SERVERS,
} from '../constants/ActionTypes';
import Api from './Api';

type Action = {
  type: string,
  payload: any,
};

function* makeUser(action: Action)
: Generator<Object, void, { done: boolean, value: any }> {
  try {
    // const data = yield call(Api.makeUser, payload);
    yield call(delay, 3000);
    yield put({ type: SUCCESSED_MAKE_USER });
  } catch (e) {
    yield put({ type: FAILED_MAKE_USER, e });
  }
}

function* registerUser(action: Action)
: Generator<Object, void, { done: boolean, value: any }> {
  try {
    yield call(delay, 3000);
    yield put({ type: SUCCESSED_REGISTER_USER });
  } catch (e) {
    yield put({ type: FAILED_REGISTER_USER });
  }
}

function* fetchKids(action: Action)
: Generator<Object, void, { done: boolean, value: any }> {
  const { payload } = action;
  try {
    const data = yield call(Api.fetchKidsById, payload);
    yield put({ type: SUCCESSED_FETCH_KIDS, payload: data });
  } catch (e) {
    yield put({ type: FAILED_FETCH_KIDS, payload: e });
  }
}

function* fetchServer(action: Action)
: Generator<Object, void, { done: boolean, value: any }> {
  try {
    const data = yield call(Api.fetchServer);
    yield put({ type: SUCCESSED_FETCH_SERVERS, payload: data });
  } catch (e) {
    yield put({ type: FAILED_FETCH_SERVERS, payload: e });
  }
}

function* fetchEnvironment(action: Action)
: Generator<Object, void, { done: boolean, value: any }> {
  try {
    const data = yield call(Api.fetchEnvironment);
    yield put({ type: SUCCESSED_FETCH_ENVIRONMENTS, payload: data });
  } catch (e) {
    yield put({ type: FAILED_FETCH_ENVIRONMENTS, payload: e });
  }
}

export default function* rootSage()
: Generator<Object, void, { done: boolean, value: any }> {
  yield takeEvery(POST_MAKE_USER, makeUser);
  yield takeEvery(POST_REGISTER_USER, registerUser);
  yield takeEvery(FETCH_KIDS, fetchKids);
  yield takeEvery(FETCH_SERVERS, fetchServer);
  yield takeEvery(FETCH_ENVIRONMENTS, fetchEnvironment);
}
