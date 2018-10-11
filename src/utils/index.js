// @flow

export const getUniqueItemByKey = (
  ary: Array<Object>,
  key: string,
): Array<Object> => (
  ary.filter((value, idx, list) => (
    (list.findIndex(item => value[key] === item[key])) === idx
  ))
);

export const isContain = (obj: Object, word: string): boolean => (
  Object.values(obj).some(v => String(v).indexOf(word) !== -1)
);

export const searchByWord = (list: Array<Object>, word: string): Array<Object> => {
  if (word === '') { return list; }
  return list.filter(item => isContain(item, word));
};
