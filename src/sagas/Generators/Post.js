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
    const { payload } = action;
    yield call(http, {
      method: 'POST',
      endpoint: EndPoints.kids.POST(),
      body: payload,
    });
    yield put({
      type: Types.SUCCESSED_HTTP_POST,
      payload: { key: 'kids' },
    });
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_POST, payload: e });
  }
}

export function* customers(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { kids_id, values } = action.payload;
    yield call(http, {
      method: 'POST',
      endpoint: EndPoints.customers.POST(kids_id),
      body: values,
    });
    yield put({
      type: Types.SUCCESSED_HTTP_POST,
      payload: { key: 'customers' },
    });
    yield Get.userInfoById(kids_id);
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_POST, payload: e });
  }
}

export function* memos(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { kids_id, values } = action.payload;
    yield call(http, {
      method: 'POST',
      endpoint: EndPoints.memos.POST(kids_id),
      body: values,
    });
    yield put({
      type: Types.SUCCESSED_HTTP_POST,
      payload: { key: 'memos' },
    });
    yield Get.userInfoById(kids_id);
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_POST, payload: e });
  }
}

export function* services(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { payload } = action;
    yield call(http, {
      method: 'POST',
      endpoint: EndPoints.services.POST(),
      body: payload,
    });
    yield put({
      type: Types.SUCCESSED_HTTP_POST,
      payload: { key: 'services' },
    });
    yield Get.services();
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_POST, payload: e });
  }
}

export function* servers(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { payload } = action;
    yield call(http, {
      method: 'POST',
      endpoint: EndPoints.servers.POST(),
      body: payload,
    });
    yield put({
      type: Types.SUCCESSED_HTTP_POST,
      payload: { key: 'servers' },
    });
    yield Get.servers();
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_POST, payload: e });
  }
}

export function* memoTemplates(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { payload } = action;
    yield call(http, {
      method: 'POST',
      endpoint: EndPoints.memoTemplates.POST(),
      body: payload,
    });
    yield put({
      type: Types.SUCCESSED_HTTP_POST,
      payload: { key: 'memoTemplates' },
    });
    yield Get.memoTemplates();
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_POST, payload: e });
  }
}

export function* accounts(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { payload } = action;
    yield call(http, {
      method: 'POST',
      endpoint: EndPoints.accounts.POST(),
      body: payload,
    });
    yield put({
      type: Types.SUCCESSED_HTTP_POST,
      payload: { key: 'accounts' },
    });
    yield Get.accounts();
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_POST, payload: e });
  }
}
