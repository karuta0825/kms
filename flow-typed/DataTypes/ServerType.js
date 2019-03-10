declare type ServerType = {
  id: number,
  ip: string,
  name: string,
  type: string,
  version: string,
  connect_db: ?string,
  domain: ?string,
  capacity: number,
  environment_id: number,
  project: string,
};
