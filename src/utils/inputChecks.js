// @flow
const inputChecks = {};

inputChecks.alphaNum = (value: string): boolean => {
  const reg = new RegExp(/^[0-9a-zA-Z]+$/);
  if (value === '') return false;
  return !reg.test(value);
};
inputChecks.alphaNum.MSG = '英数字のみ入力可能です';

inputChecks.email = (value: string): boolean => {
  const reg = new RegExp(/^[0-9a-zA-Z-_@.]+$/);
  if (value === '') return false;
  return !reg.test(value);
};
inputChecks.email.MSG =
  'a-z, 0-9, A-Z, -, _, @, .が入力可能な文字です';

inputChecks.alpha = (value: string): boolean => {
  const reg = new RegExp(/^[a-zA-Z]+$/);
  if (value === '') return false;
  return !reg.test(value);
};
inputChecks.alpha.MSG = '英字のみ入力可能です';

inputChecks.upperAlpha = (value: string): boolean => {
  const reg = new RegExp(/^[A-Z]+$/);
  if (value === '') return false;
  return !reg.test(value);
};
inputChecks.upperAlpha.MSG = '大文字英字のみ入力可能です';

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

inputChecks.isPNum = (value: string): boolean => {
  const num = Number(value);
  return num < 0;
};

export default inputChecks;
