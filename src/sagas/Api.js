export * from './Http/get';
export * from './Http/put';
export * from './Http/post';
export * from './Http/delete';

const host = 'http://localhost:8080';

const makeUrl = (endpoint: string) => `${host}${endpoint}`;

const makeOption = (
  method: string,
  headers: Obeject | null,
  body: object | null
): Object => {
  const applyHeader = headers || {
    'content-type': 'application/json',
  };
  if (!body) {
    return {
      method,
      headers: applyHeader,
      credentials: 'include',
    };
  }
  return {
    method,
    headers: applyHeader,
    credentials: 'include',
    body: JSON.stringify(body),
  };
};

export default function http({
  endpoint,
  headers,
  method,
  body,
}: {
  endpoint: string,
  headers: Object | null,
  method: string,
  body: Object,
}): Promise<any> {
  return fetch(makeUrl(endpoint), makeOption(method, headers, body))
    .then(r => {
      if (!r.ok) {
        return r.json().then(err => {
          throw err.toString();
        });
      }
      return r;
    })
    .then(r => r.json());
}
