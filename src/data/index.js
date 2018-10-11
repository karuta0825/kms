import kids from './kids';
import customers from './customers';
import license from './license';
import busivs from './busivs';
import fenics from './fenics';
import mobiles from './mobiles';
import partners from './partners';
import historys from './historys';
import memos from './memos';
import servers from './servers';
import services from './services';
import accounts from './accounts';
import memoTemplates from './memoTemplates';
import environments from './environments';
import events from './events';
import columns from './columns';
import initState from '../initState';

const { data } = initState;

export default (state = data, action) => ({
  kids: kids(state.kids, action),
  customers: customers(state.customers, action),
  license: license(state.license, action),
  busivs: busivs(state.buisvs, action),
  fenics: fenics(state.fenics, action),
  mobiles: mobiles(state.mobiles, action),
  partners: partners(state.partners, action),
  historys: historys(state.historys, action),
  memos: memos(state.memos, action),
  servers: servers(state.servers, action),
  services: services(state.services, action),
  accounts: accounts(state.accounts, action),
  memoTemplates: memoTemplates(state.memoTemplates, action),
  environments: environments(state.environments, action),
  events: events(state.events, action),
  columns: columns(state.columns, action),
});
