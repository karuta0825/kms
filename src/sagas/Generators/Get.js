// @flow
import { call, put, all } from 'redux-saga/effects';
import http from '../Api';
import * as Types from '../../constants/ActionTypes';
import * as EndPoints from '../../constants/EndPoints';

export function* kids(): Generator<
  Object,
  void,
  { done: boolean, value: any }
> {
  try {
    const data = yield call(http, {
      method: 'GET',
      endpoint: EndPoints.kids.GET(),
    });
    yield put({
      type: Types.SUCCESSED_HTTP_GET,
      payload: { key: 'kids', value: data },
    });
  } catch (e) {
    yield put({
      type: Types.FAILED_HTTP_GET,
      payload: e,
    });
  }
}

export function* fenicses(): Generator<
  Object,
  void,
  { done: boolean, value: any }
> {
  try {
    const data = yield call(http, {
      method: 'GET',
      endpoint: EndPoints.fenics.GET(),
    });
    yield put({
      type: Types.SUCCESSED_HTTP_GET,
      payload: { key: 'fenicses', value: data },
    });
  } catch (e) {
    yield put({
      type: Types.FAILED_HTTP_GET,
      payload: e,
    });
  }
}

export function* historys(
  action: Action
): Generator<Object, void, { done: boolean, value: any }> {
  try {
    const { payload } = action;
    const data = yield call(http, {
      method: 'GET',
      endpoint: EndPoints.historys.GET(payload),
    });
    yield put({
      type: Types.SUCCESSED_HTTP_GET,
      payload: { key: 'historys', value: data },
    });
  } catch (e) {
    yield put({
      type: Types.FAILED_HTTP_GET,
      payload: e,
    });
  }
}

export function* services(): Generator<
  Object,
  void,
  { done: boolean, value: any }
> {
  try {
    const data = yield call(http, {
      method: 'GET',
      endpoint: EndPoints.services.GET(),
    });
    yield put({
      type: Types.SUCCESSED_HTTP_GET,
      payload: { key: 'services', value: data },
    });
  } catch (e) {
    yield put({
      type: Types.FAILED_HTTP_GET,
      payload: e,
    });
  }
}

export function* servers(): Generator<
  Object,
  void,
  { done: boolean, value: any }
> {
  try {
    const data = yield call(http, {
      method: 'GET',
      endpoint: EndPoints.servers.GET(),
    });
    yield put({
      type: Types.SUCCESSED_HTTP_GET,
      payload: { key: 'servers', value: data },
    });
  } catch (e) {
    yield put({
      type: Types.FAILED_HTTP_GET,
      payload: e,
    });
  }
}

export function* memoTemplates(): Generator<
  Object,
  void,
  { done: boolean, value: any }
> {
  try {
    const data = yield call(http, {
      method: 'GET',
      endpoint: EndPoints.memoTemplates.GET(),
    });
    yield put({
      type: Types.SUCCESSED_HTTP_GET,
      payload: { key: 'memoTemplates', value: data },
    });
  } catch (e) {
    yield put({
      type: Types.FAILED_HTTP_GET,
      payload: e,
    });
  }
}

export function* accounts(): Generator<
  Object,
  void,
  { done: boolean, value: any }
> {
  try {
    const data = yield call(http, {
      method: 'GET',
      endpoint: EndPoints.accounts.GET(),
    });
    yield put({
      type: Types.SUCCESSED_HTTP_GET,
      payload: { key: 'accounts', value: data },
    });
  } catch (e) {
    yield put({
      type: Types.FAILED_HTTP_GET,
      payload: e,
    });
  }
}

export function* environments(): Generator<
  Object,
  void,
  { done: boolean, value: any }
> {
  try {
    const data = yield call(http, {
      method: 'GET',
      endpoint: EndPoints.environments.GET(),
    });
    yield put({
      type: Types.SUCCESSED_HTTP_GET,
      payload: { key: 'environments', value: data },
    });
  } catch (e) {
    yield put({
      type: Types.FAILED_HTTP_GET,
      payload: e,
    });
  }
}

export function* userInfoById(
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
      call(http, {
        method: 'GET',
        endpoint: EndPoints.kids.GET(payload),
      }),
      call(http, {
        method: 'GET',
        endpoint: EndPoints.customers.GET(payload),
      }),
      call(http, {
        method: 'GET',
        endpoint: EndPoints.licenses.GET(payload),
      }),
      call(http, {
        method: 'GET',
        endpoint: EndPoints.clients.GET(payload),
      }),
      call(http, {
        method: 'GET',
        endpoint: EndPoints.busivs.GET(payload),
      }),
      call(http, {
        method: 'GET',
        endpoint: EndPoints.fenics.GET(payload),
      }),
      call(http, {
        method: 'GET',
        endpoint: EndPoints.partners.GET(payload),
      }),
      call(http, {
        method: 'GET',
        endpoint: EndPoints.mobiles.GET(payload),
      }),
      call(http, {
        method: 'GET',
        endpoint: EndPoints.historys.GET(payload),
      }),
      call(http, {
        method: 'GET',
        endpoint: EndPoints.memos.GET(payload),
      }),
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
