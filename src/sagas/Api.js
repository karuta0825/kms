// @flow
import type { KidType } from '../types';

const host = 'http://localhost:8080';

const Api = {
  fetchKidsById: (id: number): Promise<Array<KidType>> => {
    const url = id ? `${host}/api/v1/kids/id/${id}` : `${host}/api/v1/kids/id`;
    return fetch(url, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      credentials: 'include',
    }).then(r => r.json());
  },
  fetchKidsByKid: (kid: number): Promise<Array<KidType>> => {
    const url = kid ? `${host}/api/v1/kids/id/${kid}` : `${host}/api/v1/kids/id`;
    return fetch(url, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      credentials: 'include',
    }).then(r => r.json());
  },
  fetchCustomerById: (id) => {

  },
  fetchBusivById: (id) => {

  },
  fetchLicenseById: (id) => {

  },
  fetchFenicsById: (id) => {

  },
  fetchHistoryById: (id) => {

  },
  fetchServer: () => {

  },
};

export default Api;
