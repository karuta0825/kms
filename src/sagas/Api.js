// @flow
import type { KidType } from '../types';

const host = 'http://localhost:8080';

const Api = {};

const optionGet = {
  method: 'GET',
  headers: { 'content-type': 'application/json' },
  credentials: 'include',
};

Api.fetchKidsById = (id: number): Promise<Array<KidType>> => {
  const url = id ? `${host}/api/v1/kids/id/${id}` : `${host}/api/v1/kids/id`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchKidsByKid = (kid: number): Promise<Array<KidType>> => {
  const url = kid ? `${host}/api/v1/kids/id/${kid}` : `${host}/api/v1/kids/id`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchCustomerById = (id) => {

};

Api.fetchBusivById = (id) => {

};

Api.fetchLicenseById = (id) => {

};

Api.fetchFenicsById = (id) => {

};

Api.fetchHistoryById = (id) => {

};

Api.fetchServer = (): Promise<Array<Object>> => {
  const url = `${host}/api/v1/servers`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchEnvironment = (): Promise<Array<Object>> => {
  const url = `${host}/api/v1/environments`;
  return fetch(url, optionGet).then(r => r.json());
};


export default Api;
