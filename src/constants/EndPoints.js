export const kids = {
  GET: kids_id =>
    kids_id ? `/api/v1/kids/id/${kids_id}` : `/api/v1/kids/id`,
  PUT: kids_id => `/api/v1/kids/${kids_id}`,
  POST: () => `/api/v1/kids`,
  DELETE: kids_id => `/api/v1/kids/${kids_id}`,
};

export const customers = {
  GET: kids_id => `/api/v1/customers/id/${kids_id}`,
  PUT: base_id => `/api/v1/customers/${base_id}`,
  POST: kids_id => `/api/v1/customers/${kids_id}`,
  DELETE: base_id => `/api/v1/customers/${base_id}`,
};

export const licenses = {
  GET: kids_id => `/api/v1/licenses/id/${kids_id}`,
  PUT: kids_id => `/api/v1/licenses/${kids_id}`,
  POST: () => {},
  DELETE: () => {},
};

export const clients = {
  GET: kids_id => `/api/v1/clients/id/${kids_id}`,
  PUT: () => `/api/v1/clients`,
  POST: kids_id => `/api/v1/clients/${kids_id}`,
  DELETE: () => `/api/v1/clients`,
};

export const fenicses = {
  GET: kids_id => `/api/v1/fenics/id/${kids_id}`,
  PUT: () => `/api/v1/fenics`,
  POST: kids_id => `/api/v1/fenics/${kids_id}`,
  DELETE: () => `/api/v1/fenics`,
};

export const busivs = {
  GET: kids_id => `/api/v1/busivs/id/${kids_id}`,
  PUT: base_id => `/api/v1/busivs/${base_id}`,
  POST: () => {},
  DELETE: base_id => `/api/v1/busivs/${base_id}`,
};

export const partners = {
  GET: kids_id => `/api/v1/partners/id/${kids_id}`,
  PUT: kids_id => `api/v1/partners/${kids_id}`,
  POST: () => {},
  DELETE: () => {},
};

export const mobiles = {
  GET: kids_id => `/api/v1/mobiles/id/${kids_id}`,
  PUT: base_id => `/api/v1/mobiles/${base_id}`,
  POST: () => `/api/v1/mobiles`,
  DELETE: base_id => `/api/v1/mobiles/${base_id}`,
};

export const memos = {
  GET: kids_id => `/api/v1/memos/id/${kids_id}`,
  PUT: id => `/api/v1/memos/${id}`,
  POST: kids_id => `/api/v1/memos/${kids_id}`,
  DELETE: id => `/api/v1/memos/${id}`,
};

export const historys = {
  GET: kids_id =>
    kids_id ? `/api/v1/historys/id/${kids_id}` : `/api/v1/historys`,
  PUT: () => {},
  POST: () => {},
  DELETE: () => `/api/v1/historys`,
};

export const servers = {
  GET: () => `/api/v1/servers`,
  PUT: () => `/api/v1/servers`,
  POST: () => `/api/v1/servers`,
  DELETE: () => `/api/v1/servers`,
};

export const services = {
  GET: () => `/api/v1/services`,
  PUT: () => `/api/v1/services`,
  POST: () => `/api/v1/services`,
  DELETE: () => `/api/v1/services`,
};

export const memoTemplates = {
  GET: () => `/api/v1/memoTemplates`,
  PUT: id => `/api/v1/memoTemplates/${id}`,
  POST: () => `/api/v1/memoTemplates`,
  DELETE: id => `/api/v1/memoTemplates/${id}`,
};

export const environments = {
  GET: () => `/api/v1/environments`,
  PUT: () => {},
  POST: () => {},
  DELETE: () => {},
};

export const accounts = {
  GET: () => `/api/v1/accounts`,
  PUT: () => `/api/v1/accounts`,
  POST: () => `/api/v1/accounts`,
  DELETE: () => `/api/v1/accounts`,
};
