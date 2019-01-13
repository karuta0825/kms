// @flow
const host = 'http://localhost:8080';

const Api = {};

const optionGet = {
  method: 'GET',
  headers: { 'content-type': 'application/json' },
  credentials: 'include',
};

const optionGetText = {
  method: 'GET',
  headers: { 'content-type': 'text/plain' },
  credentials: 'include',
};

Api.fetchKidsById = (id: number): Promise<Array<KidType>> => {
  const url = id
    ? `${host}/api/v1/kids/id/${id}`
    : `${host}/api/v1/kids/id`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchKidsByKid = (kid: number): Promise<Array<KidType>> => {
  const url = kid
    ? `${host}/api/v1/kids/id/${kid}`
    : `${host}/api/v1/kids/id`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchClientById = (
  id: number
): Promise<Array<ClientType>> => {
  const url = `${host}/api/v1/clients/id/${id}`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchBusivById = (id: number): Promise<Array<BusivType>> => {
  const url = `${host}/api/v1/busivs/id/${id}`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchFenicsById = (
  id: number
): Promise<Array<FenicsType>> => {
  const url = `${host}/api/v1/fenics/id/${id}`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchCustomerById = (id: number): Promise<CustomerType> => {
  const url = `${host}/api/v1/customers/id/${id}`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchLicenseById = (id: number): Promise<LicenseType> => {
  const url = `${host}/api/v1/licenses/id/${id}`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchMemoById = (id: number): Promise<Array<MemoType>> => {
  const url = `${host}/api/v1/memos/id/${id}`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchMobileById = (
  id: number
): Promise<Array<MobileType>> => {
  const url = `${host}/api/v1/mobiles/id/${id}`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchPartnerById = (
  id: number
): Promise<Array<PartnerType>> => {
  const url = `${host}/api/v1/partners/id/${id}`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchHistoryById = (
  id: number
): Promise<Array<HistoryType>> => {
  const url = `${host}/api/v1/historys/id/${id}`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchEnvironment = (): Promise<Array<ServiceType>> => {
  const url = `${host}/api/v1/environments`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchMemoTemplate = (): Promise<Array<MemoTemplateType>> => {
  const url = `${host}/api/v1/memoTemplates`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchServer = (): Promise<Array<ServerType>> => {
  const url = `${host}/api/v1/servers`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchService = (): Promise<Array<ServiceType>> => {
  const url = `${host}/api/v1/services`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchEvent = (
  yearMonth: string
): Promise<Array<EventType>> => {
  const url = `${host}/api/v1/events/${yearMonth}`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchAvailableUsers = (): Promise<Array<Object>> => {
  const url = `${host}/api/v1/availableUsers`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchEnvironmentById = (
  id: number
): Promise<Array<EnvironmentType>> => {
  const url = `${host}/api/v1/environments/${id}`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchEnvironmentByTypeAndVersion = (
  type: string,
  version: string
): Promise<Array<EnvironmentType>> => {
  const url = `${host}/api/v1/environments/${type}/${version}`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchAddInfo = (
  yearMonth: string
): Promise<Array<Object>> => {
  const url = `${host}/api/v1/addInfo/${yearMonth}`;
  return fetch(url, optionGet).then(r => r.json());
};

Api.fetchTemplate = (name: string): Promise<string> => {
  const url = `${host}/template/${name}`;
  return fetch(url, optionGetText).then(r => r.text());
};

export default Api;
