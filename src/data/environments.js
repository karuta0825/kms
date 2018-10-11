

export type Environment = {
  id: number,
  name: string,
  system_type: string,
  version: string,
  kid: string,
};


export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}