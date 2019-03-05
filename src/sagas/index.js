// @flow
import { delay } from 'redux-saga';
import { takeEvery, call, put, all } from 'redux-saga/effects';
import * as Types from '../constants/ActionTypes';
import * as Api from './Api';
import http from './Api';
import * as EndPoints from '../constants/EndPoints';

function* makeUser(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    yield call(delay, 3000);
    yield put({
      type: Types.SUCCESSED_MAKE_USER,
      payload: 'KID88888',
    });
  } catch (e) {
    yield put({ type: Types.FAILED_MAKE_USER, e });
  }
}

function* registerUser(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    yield call(delay, 3000);
    yield put({ type: Types.SUCCESSED_REGISTER_USER });
  } catch (e) {
    yield put({ type: Types.FAILED_REGISTER_USER });
  }
}

function* httpGet(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  const { key, options } = action.payload;
  try {
    const data = yield call(http, { method: 'GET', ...options });
    yield put({
      type: Types.SUCCESSED_HTTP_GET,
      payload: { key, value: data },
    });
  } catch (e) {
    yield put({
      type: Types.FAILED_HTTP_GET,
      payload: e,
    });
  }
}

function* httpPost(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { key, options } = action.payload;
    yield call(http, { method: 'POST', ...options });
    const result = yield call(http, {
      method: 'GET',
      endpoint: EndPoints[key].GET(),
    });
    yield put({
      type: Types.SUCCESSED_HTTP_POST,
      payload: { key, value: result },
    });
  } catch (e) {
    yield put({
      type: Types.FAILED_HTTP_POST,
      payload: e,
    });
  }
}

function* httpDelete(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { key, options } = action.payload;
    yield call(http, { method: 'DELETE', ...options });
    const result = yield call(http, {
      method: 'GET',
      endpoint: EndPoints[key].GET(),
    });
    yield put({
      type: Types.SUCCESSED_HTTP_DELETE,
      payload: { key, value: result },
    });
  } catch (e) {
    yield put({
      type: Types.FAILED_HTTP_DELETE,
      payload: e,
    });
  }
}

function* httpPut(
  action: Action
): Generator<
  Object,
  void,
  { done: boolean, [key: string]: any }
> {
  try {
    const { key, options } = action.payload;
    yield call(http, { method: 'PUT', ...options });
    const result = yield call(http, {
      method: 'GET',
      endpoint: EndPoints[key].GET(),
    });
    yield put({
      type: Types.SUCCESSED_HTTP_PUT,
      payload: { key, value: result },
    });
  } catch (e) {
    yield put({
      type: Types.FAILED_HTTP_PUT,
      payload: e,
    });
  }
}

function* fetchUserInfoById(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  const { payload } = action;
  try {
    const [
      baseInfo,
      customer,
      license,
      client,
      busiv,
      fenics,
      partner,
      mobile,
      history,
      memo,
    ] = yield all([
      call(Api.fetchKidsById, payload),
      call(Api.fetchCustomerById, payload),
      call(Api.fetchLicenseById, payload),
      call(Api.fetchClientById, payload),
      call(Api.fetchBusivById, payload),
      call(Api.fetchFenicsById, payload),
      call(Api.fetchPartnerById, payload),
      call(Api.fetchMobileById, payload),
      call(Api.fetchHistoryById, payload),
      call(Api.fetchMemoById, payload),
    ]);
    yield put({
      type: Types.SUCCESSED_FETCH_USERINFO,
      payload: {
        baseInfo,
        customer,
        license,
        client,
        busiv,
        fenics,
        partner,
        mobile,
        history,
        memo,
      },
    });
  } catch (e) {
    yield put({ type: Types.FAILED_FETCH_USERINFO, payload: e });
  }
}

export default function* rootSage(): Generator<
  Object,
  void,
  { done: boolean, value: any }
> {
  yield takeEvery(Types.POST_MAKE_USER, makeUser);
  yield takeEvery(Types.POST_REGISTER_USER, registerUser);
  yield takeEvery(Types.FETCH_USERINFO, fetchUserInfoById);
  yield takeEvery(Types.HTTP_GET, httpGet);
  yield takeEvery(Types.HTTP_POST, httpPost);
  yield takeEvery(Types.HTTP_DELETE, httpDelete);
  yield takeEvery(Types.HTTP_PUT, httpPut);
}
