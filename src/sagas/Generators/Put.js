// flow
import { call, put } from 'redux-saga/effects';
import http from '../Api';
import * as Types from '../../constants/ActionTypes';
import * as EndPoints from '../../constants/EndPoints';
import * as Get from './Get';

export function* kids(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    // 入力チェック
    const { kids_id, inputValues } = action.payload;
    yield call(http, {
      method: 'PUT',
      endpoint: EndPoints.kids.PUT(kids_id),
      body: inputValues,
    });
    yield put({
      type: Types.SUCCESSED_HTTP_PUT,
      payload: { key: 'kids' },
    });
    yield put({ type: Types.FETCH_USERINFO, payload: kids_id });
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_PUT, payload: e });
  }
}

export function* customers(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { kids_id, base_id, inputValues } = action.payload;
    yield call(http, {
      method: 'PUT',
      endpoint: EndPoints.customers.PUT(base_id),
      body: inputValues,
    });
    yield put({
      type: Types.SUCCESSED_HTTP_PUT,
      payload: { key: 'customers' },
    });
    yield put({ type: Types.FETCH_USERINFO, payload: kids_id });
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_PUT, payload: e });
  }
}

export function* licenses(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { kids_id, inputValues } = action.payload;
    // 入力チェック
    yield call(http, {
      method: 'PUT',
      endpoint: EndPoints.licenses.PUT(kids_id),
      body: inputValues,
    });
    yield put({
      type: Types.SUCCESSED_HTTP_PUT,
      payload: { key: 'licenses' },
    });
    yield put({ type: Types.FETCH_USERINFO, payload: kids_id });
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_PUT, payload: e });
  }
}

export function* clients(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { kids_id, rowChanges } = action.payload;
    // 入力チェック
    yield call(http, {
      method: 'PUT',
      endpoint: EndPoints.clients.PUT(),
      body: rowChanges,
    });
    yield put({
      type: Types.SUCCESSED_HTTP_PUT,
      payload: { key: 'clients' },
    });
    yield put({ type: Types.FETCH_USERINFO, payload: kids_id });
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_PUT, payload: e });
  }
}

export function* fenicses(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { kids_id, rowChanges } = action.payload;
    yield call(http, {
      method: 'PUT',
      endpoint: EndPoints.fenicses.PUT(),
      body: rowChanges,
    });
    yield put({
      type: Types.SUCCESSED_HTTP_PUT,
      payload: { key: 'fenicses' },
    });
    yield put({ type: Types.FETCH_USERINFO, payload: kids_id });
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_PUT, payload: e });
  }
}

export function* busivs(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { kids_id, base_id, inputValues } = action.payload;
    delete inputValues.base_id;
    yield call(http, {
      method: 'PUT',
      endpoint: EndPoints.busivs.PUT(base_id),
      body: { information: JSON.stringify(inputValues) },
    });
    yield put({
      type: Types.SUCCESSED_HTTP_PUT,
      payload: { key: 'busivs' },
    });
    yield put({ type: Types.FETCH_USERINFO, payload: kids_id });
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_PUT, payload: e });
  }
}

export function* mobiles(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { kids_id, base_id, inputValues } = action.payload;
    yield call(http, {
      method: 'PUT',
      endpoint: EndPoints.mobiles.PUT(base_id),
      body: inputValues,
    });
    yield put({
      type: Types.SUCCESSED_HTTP_PUT,
      payload: { key: 'mobiles' },
    });
    yield put({ type: Types.FETCH_USERINFO, payload: kids_id });
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_PUT, payload: e });
  }
}

export function* partners(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { kids_id, inputValues } = action.payload;
    delete inputValues.kids_id;
    yield call(http, {
      method: 'PUT',
      endpoint: EndPoints.partners.PUT(kids_id),
      body: inputValues,
    });
    yield put({
      type: Types.SUCCESSED_HTTP_PUT,
      payload: { key: 'partners' },
    });
    yield put({ type: Types.FETCH_USERINFO, payload: kids_id });
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_PUT, payload: e });
  }
}

export function* memos(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { kids_id, id, inputValues } = action.payload;
    let priority_id = 4;
    if (inputValues.priority === 'emergency') {
      priority_id = 1;
    }
    if (inputValues.priority === 'important') {
      priority_id = 2;
    }
    if (inputValues.priority === 'reminder') {
      priority_id = 3;
    }
    inputValues.priority_id = priority_id;
    delete inputValues.priority;
    delete inputValues.short_msg;
    delete inputValues.name;
    yield call(http, {
      method: 'PUT',
      endpoint: EndPoints.memos.PUT(id),
      body: inputValues,
    });
    yield put({
      type: Types.SUCCESSED_HTTP_PUT,
      payload: { key: 'memos' },
    });
    yield put({ type: Types.FETCH_USERINFO, payload: kids_id });
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_PUT, payload: e });
  }
}

export function* servers(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { payload } = action;
    yield call(http, {
      method: 'PUT',
      endpoint: EndPoints.servers.PUT(),
      body: payload,
    });
    yield put({
      type: Types.SUCCESSED_HTTP_PUT,
      payload: { key: 'servers' },
    });
    yield Get.servers();
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_PUT, payload: e });
  }
}

export function* services(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { payload } = action;
    yield call(http, {
      method: 'PUT',
      endpoint: EndPoints.services.PUT(),
      body: payload,
    });
    yield put({
      type: Types.SUCCESSED_HTTP_PUT,
      payload: { key: 'services' },
    });
    yield Get.services();
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_PUT, payload: e });
  }
}

export function* memoTemplates(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { id, title, msg } = action.payload;
    yield call(http, {
      method: 'PUT',
      endpoint: EndPoints.memoTemplates.PUT(id),
      body: { title, msg },
    });
    yield put({
      type: Types.SUCCESSED_HTTP_PUT,
      payload: { key: 'memoTemplates' },
    });
    yield Get.memoTemplates();
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_PUT, payload: e });
  }
}

export function* accounts(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { payload } = action;
    yield call(http, {
      method: 'PUT',
      endpoint: EndPoints.accounts.PUT(),
      body: payload,
    });
    yield put({
      type: Types.SUCCESSED_HTTP_PUT,
      payload: { key: 'accounts' },
    });
    yield Get.accounts();
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_PUT, payload: e });
  }
}
