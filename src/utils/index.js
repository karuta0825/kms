// @flow
/**
 * 本メソッドは、すべてテストを行うこと
 */

export function getUniqueItemByKey(
  ary: Array<Object>,
  key: string
): Array<Object> {
  return ary.filter(
    (value, idx, list) =>
      list.findIndex(item => value[key] === item[key]) === idx
  );
}

export const isContain = (obj: Object, word: string): boolean =>
  Object.values(obj).some(v => String(v).indexOf(word) !== -1);

export const searchByWord = (
  list: Array<Object>,
  word: string
): Array<Object> => {
  if (word === '') {
    return list;
  }
  return list.filter(item => isContain(item, word));
};

export function searchVersion(
  list: Array<Object>,
  isES: boolean,
  isLM: boolean
): Array<Object> {
  if (isES && isLM) {
    return list;
  }
  if (isES) {
    return list.filter(item => item.version === 'ES');
  }
  if (isLM) {
    return list.filter(item => item.version === 'LM');
  }
  return list;
}

export function searchSystemType(
  list: Array<Object>,
  isOnpre: boolean,
  isCloud: boolean,
  isKensyo: boolean,
  isDemo: boolean
): Array<Object> {
  if (!isOnpre && !isCloud && !isKensyo && !isDemo) {
    return list;
  }

  if (isOnpre && isCloud && isKensyo && isDemo) {
    return list;
  }

  const onpreUser = isOnpre
    ? list.filter(item => item.system_type === 'onpre')
    : [];
  const cloudUser = isCloud
    ? list.filter(item => item.system_type === 'cloud')
    : [];
  const kensyoUser = isKensyo
    ? list.filter(item => item.system_type === 'kensyo')
    : [];
  const demoUser = isDemo
    ? list.filter(item => item.system_type === 'demo')
    : [];

  return [
    ...onpreUser,
    ...cloudUser,
    ...kensyoUser,
    ...demoUser,
  ];
}

export function searchNetwork(
  list: Array<Object>,
  hasFenics: boolean,
  hasBusiv: boolean
): Array<Object> {
  let ary;
  if (hasFenics && hasBusiv) {
    ary = list.filter(item => item.has_fenics === 1);
    ary = ary.filter(item => item.has_busiv === 1);
    return ary;
  }

  if (hasFenics && !hasBusiv) {
    ary = list.filter(item => item.has_fenics === 1);
    ary = ary.filter(item => item.has_busiv === 0);
    return ary;
  }

  if (!hasFenics && hasBusiv) {
    ary = list.filter(item => item.has_fenics === 0);
    ary = ary.filter(item => item.has_busiv === 1);
    return ary;
  }
  return list;
}

export function searchHasMobile(
  list: Array<Object>,
  hasMobile: boolean
): Array<Object> {
  if (hasMobile) {
    return list.filter(item => item.has_mobile === 1);
  }
  return list;
}

export function searchServer() {}

export function searchUser(
  list: Array<Object>,
  filter: Object
): Array<Object> {
  let ary = [...list];
  // キーワード検索
  ary = searchByWord(ary, filter.keyword);

  // バージョン検索
  ary = searchVersion(ary, filter.isES, filter.isLM);

  // システムタイプ検索
  const { isOnpre, isCloud, isKensyo, isDemo } = filter;
  ary = searchSystemType(
    ary,
    isOnpre,
    isCloud,
    isKensyo,
    isDemo
  );

  // ネットワーク検索
  ary = searchNetwork(ary, filter.hasFenics, filter.hasBusiv);

  // モバイル検索
  ary = searchHasMobile(ary, filter.hasMobile);

  return ary;
}

/**
 * 文字列から数値のみ抽出して、数値型で渡す
 * @param {string} str
 * @return {number}
 */
export function convertStN(str: string): number {
  const result = str.replace(/[^0-9]/g, '');
  return Number(result);
}

export function filterServer(
  list: Array<ServerType>,
  version: string,
  type: string
): Array<ServerType> {
  return list
    .filter(
      item => item.version === version && item.type === type
    )
    .map(server => ({
      ...server,
      name: `${server.name}(${server.ip})`,
      value: `${server.name}`,
    }));
}

export function filterService(
  list: Array<ServiceType>,
  version: string
): Array<ServiceType> {
  return list.filter(item => item.version === version);
}

// kid_idを入れると, 次の番号と次があるかどうか?
export const getNextKidsId = (
  list: Array<KidType>,
  kids_id: string,
  leftOrRight: number
): { kids_id: ?number, hasNext: boolean, hasPrev: boolean } => {
  const maxIndex = list.length - 1;
  const nowIndex =
    list && list.findIndex(item => item.id === Number(kids_id));
  const nextIndex = nowIndex + leftOrRight;
  const hasNext =
    leftOrRight < 0 ? true : nowIndex + 1 < maxIndex;
  const hasPrev = leftOrRight > 0 ? true : nowIndex - 1 > 0;
  const id = (list[nextIndex] && list[nextIndex].id) || null;

  return {
    kids_id: id,
    hasNext,
    hasPrev,
  };
};
