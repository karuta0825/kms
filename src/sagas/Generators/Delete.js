// @flow
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
      method: 'DELETE',
      endpoint: EndPoints.kids.DELETE(),
      body: payload,
    });
    const data = yield call(http, {
      method: 'GET',
      endpoint: EndPoints.kids.GET(),
    });
    yield put({
      type: Types.SUCCESSED_HTTP_DELETE,
      payload: { key: 'kids', value: data },
    });
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_DELETE, payload: e });
  }
}
export function* customers(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { kids_id, base_id } = action.payload;
    yield call(http, {
      method: 'DELETE',
      endpoint: EndPoints.customers.DELETE(base_id),
    });
    yield put({ type: Types.FETCH_USERINFO, payload: kids_id });
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_DELETE, payload: e });
  }
}

export function* clients(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { selection, kids_id } = action.payload;
    yield call(http, {
      method: 'DELETE',
      endpoint: EndPoints.clients.DELETE(),
      body: selection,
    });
    yield put({ type: Types.FETCH_USERINFO, payload: kids_id });
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_DELETE, payload: e });
  }
}

export function* fenicses(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { selection, kids_id } = action.payload;
    yield call(http, {
      method: 'DELETE',
      endpoint: EndPoints.fenicses.DELETE(),
      body: selection,
    });
    yield put({ type: Types.FETCH_USERINFO, payload: kids_id });
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_DELETE, payload: e });
  }
}

export function* historys(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { kids_id, selection } = action.payload;
    yield call(http, {
      method: 'DELETE',
      endpoint: EndPoints.historys.DELETE(),
      body: selection,
    });
    yield put({
      type: Types.SUCCESSED_HTTP_DELETE,
      payload: { key: 'historys' },
    });
    yield put({ type: Types.FETCH_USERINFO, payload: kids_id });
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_DELETE, payload: e });
  }
}

export function* memos(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { kids_id, id } = action.payload;
    yield call(http, {
      method: 'DELETE',
      endpoint: EndPoints.memos.DELETE(id),
    });
    yield put({
      type: Types.SUCCESSED_HTTP_DELETE,
      payload: { key: 'memos' },
    });
    yield put({ type: Types.FETCH_USERINFO, payload: kids_id });
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_DELETE, payload: e });
  }
}

export function* memoTemplates(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { payload } = action;
    yield call(http, {
      method: 'DELETE',
      endpoint: EndPoints.memoTemplates.DELETE(payload),
    });
    yield put({
      type: Types.SUCCESSED_HTTP_DELETE,
      payload: { key: 'memoTemplates' },
    });
    yield Get.memoTemplates();
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_DELETE, payload: e });
  }
}

export function* servers(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { payload } = action;
    yield call(http, {
      method: 'DELETE',
      endpoint: EndPoints.servers.DELETE(payload),
    });
    yield put({
      type: Types.SUCCESSED_HTTP_DELETE,
      payload: { key: 'servers' },
    });
    yield Get.servers();
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_DELETE, payload: e });
  }
}

export function* services(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { payload } = action;
    yield call(http, {
      method: 'DELETE',
      endpoint: EndPoints.services.DELETE(),
      body: payload,
    });
    yield put({
      type: Types.SUCCESSED_HTTP_DELETE,
      payload: { key: 'services' },
    });
    yield Get.services();
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_DELETE, payload: e });
  }
}

export function* accounts(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { payload } = action;
    yield call(http, {
      method: 'DELETE',
      endpoint: EndPoints.accounts.DELETE(payload),
    });
    yield put({
      type: Types.SUCCESSED_HTTP_DELETE,
      payload: { key: 'accounts' },
    });
    yield Get.accounts();
  } catch (e) {
    yield put({ type: Types.FAILED_HTTP_DELETE, payload: e });
  }
}
