// @flow
const inputChecks = {};

inputChecks.alphaNum = (value: string): boolean => {
  const reg = new RegExp(/^[0-9a-zA-Z]+$/);
  if (value === '') return false;
  return !reg.test(value);
};

inputChecks.email = (value: string): boolean => {
  const reg = new RegExp(/^[0-9a-zA-Z-_@.]+$/);
  if (value === '') return false;
  return !reg.test(value);
};

inputChecks.alpha = (value: string): boolean => {
  const reg = new RegExp(/^[a-zA-Z]+$/);
  if (value === '') return false;
  return !reg.test(value);
};

inputChecks.upperAlpha = (value: string): boolean => {
  const reg = new RegExp(/^[A-Z]+$/);
  if (value === '') return false;
  return !reg.test(value);
};

inputChecks.upperAlphaNum = (value: string): boolean => {
  const reg = new RegExp(/^[0-9A-Z]+$/);
  if (value === '') return false;
  return !reg.test(value);
};

inputChecks.lowerAlpha = (value: string): boolean => {
  const reg = new RegExp(/^[a-z]+$/);
  if (value === '') return false;
  return !reg.test(value);
};

inputChecks.lowerAlphaNum = (value: string): boolean => {
  const reg = new RegExp(/^[0-9a-z]+$/);
  if (value === '') return false;
  return !reg.test(value);
};

inputChecks.telFax = (value: string): boolean => {
  const reg = new RegExp(/^[0-9-]+$/);
  if (value === '') return false;
  return !reg.test(value);
};

export default inputChecks;
