// @flow
import { delay } from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';
import * as Types from '../constants/ActionTypes';
import * as Get from './Generators/Get';
import * as Delete from './Generators/Delete';
import * as Post from './Generators/Post';
import * as Put from './Generators/Put';

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

export default function* rootSage(): Generator<
  Object,
  void,
  { done: boolean, value: any }
> {
  yield takeEvery(Types.POST_REGISTER_USER, registerUser);
  yield takeEvery(Types.FETCH_USERINFO, Get.userInfoById);

  // Get
  yield takeEvery(Types.HTTP_GET_SERVERS, Get.servers);
  yield takeEvery(Types.HTTP_GET_SERVICES, Get.services);
  yield takeEvery(Types.HTTP_GET_MEMOTEMPLATES, Get.memoTemplates);
  yield takeEvery(Types.HTTP_GET_ENVIRONMENTS, Get.environments);
  yield takeEvery(Types.HTTP_GET_ACCOUNTS, Get.accounts);
  yield takeEvery(Types.HTTP_GET_KIDS, Get.kids);

  // Delete
  yield takeEvery(Types.HTTP_DELETE_SERVERS, Delete.servers);
  yield takeEvery(Types.HTTP_DELETE_SERVICES, Delete.services);
  yield takeEvery(
    Types.HTTP_DELETE_MEMOTEMPLATES,
    Delete.memoTemplates
  );
  yield takeEvery(Types.HTTP_DELETE_ACCOUNTS, Delete.accounts);
  yield takeEvery(Types.HTTP_DELETE_KIDS, Delete.kids);
  yield takeEvery(Types.HTTP_DELETE_CUSTOMERS, Delete.customers);
  yield takeEvery(Types.HTTP_DELETE_CLIENTS, Delete.clients);
  yield takeEvery(Types.HTTP_DELETE_FENICSES, Delete.fenicses);
  yield takeEvery(Types.HTTP_DELETE_HISTORYS, Delete.historys);
  yield takeEvery(Types.HTTP_DELETE_MEMOS, Delete.memos);

  // POST
  yield takeEvery(Types.HTTP_POST_KIDS, Post.kids);
  yield takeEvery(Types.HTTP_POST_CUSTOMERS, Post.customers);
  yield takeEvery(Types.HTTP_POST_MEMOS, Post.memos);
  yield takeEvery(Types.HTTP_POST_SERVICES, Post.services);
  yield takeEvery(Types.HTTP_POST_SERVERS, Post.servers);
  yield takeEvery(Types.HTTP_POST_ACCOUNTS, Post.accounts);
  yield takeEvery(Types.HTTP_POST_MEMOTEMPLATES, Post.memoTemplates);

  yield takeEvery(Types.HTTP_PUT_KIDS, Put.kids);
  yield takeEvery(Types.HTTP_PUT_CUSTOMERS, Put.customers);
  yield takeEvery(Types.HTTP_PUT_LICENSES, Put.licenses);
  yield takeEvery(Types.HTTP_PUT_CLIENTS, Put.clients);
  yield takeEvery(Types.HTTP_PUT_FENICSES, Put.fenicses);
  yield takeEvery(Types.HTTP_PUT_BUSIVS, Put.busivs);
  yield takeEvery(Types.HTTP_PUT_MOBILES, Put.mobiles);
  yield takeEvery(Types.HTTP_PUT_PARTNERS, Put.partners);
  yield takeEvery(Types.HTTP_PUT_MEMOS, Put.memos);
  yield takeEvery(Types.HTTP_PUT_SERVERS, Put.servers);
  yield takeEvery(Types.HTTP_PUT_SERVICES, Put.services);
  yield takeEvery(Types.HTTP_PUT_MEMOTEMPLATES, Put.memoTemplates);
  yield takeEvery(Types.HTTP_PUT_ACCOUNTS, Put.accounts);
}
