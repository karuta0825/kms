// @flow
import { delay } from 'redux-saga';
import {
  takeEvery,
  call,
  put,
  all,
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
  SUCCESSED_FETCH_USERINFO,
  FAILED_MAKE_USER,
  FAILED_REGISTER_USER,
  FAILED_FETCH_KIDS,
  FAILED_FETCH_ENVIRONMENTS,
  FAILED_FETCH_SERVERS,
  FAILED_FETCH_USERINFO,
  FETCH_KIDS,
  FETCH_ENVIRONMENTS,
  FETCH_SERVERS,
  FETCH_USERINFO,
  FAILED_FETCH_SERVICES,
  SUCCESSED_FETCH_SERVICES,
  FETCH_SERVICES,
  SUCCESSED_FETCH_MEMOTEMPLATES,
  FAILED_FETCH_MEMOTEMPLATES,
  FETCH_MEMOTEMPLATES,
  FAILED_POST_MEMO_TEMPLATE,
  SUCCESSED_POST_MEMO_TEMPLATE,
  POST_MEMO_TEMPLATE,
  DELETE_MEMO_TEMPLATE,
  PUT_MEMO_TEMPLATE,
} from '../constants/ActionTypes';
import Api from './Api';

function* makeUser(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    yield call(delay, 3000);
    yield put({
      type: SUCCESSED_MAKE_USER,
      payload: 'KID88888',
    });
  } catch (e) {
    yield put({ type: FAILED_MAKE_USER, e });
  }
}

function* registerUser(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    yield call(delay, 3000);
    yield put({ type: SUCCESSED_REGISTER_USER });
  } catch (e) {
    yield put({ type: FAILED_REGISTER_USER });
  }
}

function* fetchKids(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  const { payload } = action;
  try {
    const data = yield call(Api.fetchKidsById, payload);
    yield put({ type: SUCCESSED_FETCH_KIDS, payload: data });
  } catch (e) {
    yield put({ type: FAILED_FETCH_KIDS, payload: e });
  }
}

function* fetchServer(): Generator<
  Object,
  void,
  { done: boolean, value: any }
> {
  try {
    const data = yield call(Api.fetchServer);
    yield put({ type: SUCCESSED_FETCH_SERVERS, payload: data });
  } catch (e) {
    yield put({ type: FAILED_FETCH_SERVERS, payload: e });
  }
}

function* fetchService(): Generator<
  Object,
  void,
  { done: boolean, value: any }
> {
  try {
    const data = yield call(Api.fetchService);
    yield put({ type: SUCCESSED_FETCH_SERVICES, payload: data });
  } catch (e) {
    yield put({ type: FAILED_FETCH_SERVICES, payload: e });
  }
}

function* fetchEnvironment(): Generator<
  Object,
  void,
  { done: boolean, value: any }
> {
  try {
    const data = yield call(Api.fetchEnvironment);
    yield put({
      type: SUCCESSED_FETCH_ENVIRONMENTS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: FAILED_FETCH_ENVIRONMENTS, payload: e });
  }
}

function* fetchMemoTemplate(): Generator<
  Object,
  void,
  { done: boolean, value: any }
> {
  try {
    const data = yield call(Api.fetchMemoTemplate);
    yield put({
      type: SUCCESSED_FETCH_MEMOTEMPLATES,
      payload: data,
    });
  } catch (e) {
    yield put({ type: FAILED_FETCH_MEMOTEMPLATES, payload: e });
  }
}

function* makeMemoTemplate(): Generator<
  Object,
  void,
  { done: boolean, value: any }
> {
  try {
    const store = yield select();
    yield call(
      Api.makeMemoTemplate,
      store.templateManagePage.inputValues
    );
    const result = yield call(Api.fetchMemoTemplate);
    yield put({
      type: SUCCESSED_POST_MEMO_TEMPLATE,
      payload: result,
    });
  } catch (e) {
    yield put({
      type: FAILED_POST_MEMO_TEMPLATE,
      payload: e,
    });
  }
}

function* deleteMemoTemplate(): Generator<
  Object,
  void,
  { done: boolean, value: any }
> {
  try {
    const id = yield select(
      (state: StateType) =>
        state.templateManagePage.inputValues.id
    );
    yield call(Api.deleteMemoTemplate, id);
    const result = yield call(Api.fetchMemoTemplate);
    yield put({
      type: SUCCESSED_POST_MEMO_TEMPLATE,
      payload: result,
    });
  } catch (e) {
    yield put({
      type: FAILED_POST_MEMO_TEMPLATE,
      payload: e,
    });
  }
}

function* updateMemoTemplate(): Generator<
  Object,
  void,
  { done: boolean, [key: string]: any }
> {
  try {
    const { id, title, msg } = yield select(
      (state: StateType) => state.templateManagePage.inputValues
    );
    yield call(Api.updateMemoTemplate, id, {
      title,
      msg,
    });
    const result = yield call(Api.fetchMemoTemplate);
    yield put({
      type: SUCCESSED_POST_MEMO_TEMPLATE,
      payload: result,
    });
  } catch (e) {
    yield put({
      type: FAILED_POST_MEMO_TEMPLATE,
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
      type: SUCCESSED_FETCH_USERINFO,
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
    yield put({ type: FAILED_FETCH_USERINFO, payload: e });
  }
}

export default function* rootSage(): Generator<
  Object,
  void,
  { done: boolean, value: any }
> {
  yield takeEvery(POST_MAKE_USER, makeUser);
  yield takeEvery(POST_REGISTER_USER, registerUser);
  yield takeEvery(FETCH_KIDS, fetchKids);
  yield takeEvery(FETCH_SERVERS, fetchServer);
  yield takeEvery(FETCH_SERVICES, fetchService);
  yield takeEvery(FETCH_ENVIRONMENTS, fetchEnvironment);
  yield takeEvery(FETCH_USERINFO, fetchUserInfoById);
  yield takeEvery(FETCH_MEMOTEMPLATES, fetchMemoTemplate);
  yield takeEvery(POST_MEMO_TEMPLATE, makeMemoTemplate);
  yield takeEvery(DELETE_MEMO_TEMPLATE, deleteMemoTemplate);
  yield takeEvery(PUT_MEMO_TEMPLATE, updateMemoTemplate);
}
