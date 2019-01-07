// @flow
import Encoding from 'encoding-japanese';

const convertStr2UnicodeList = (str: string): Array<number> => {
  const list = [];
  for (let i = 0; i < str.length; i += 1) {
    list.push(str.charCodeAt(i));
  }
  return list;
};

const convertStr2Sjis = (str: string): Array<Uint8Array> => {
  const list_unicode = convertStr2UnicodeList(str);
  const list_sjis = Encoding.convert(
    list_unicode, // 文字列を直接渡すのではない点に注意
    'SJIS', // to
    'UNICODE' // from
  );

  return [new Uint8Array(list_sjis)];
};

export const makeBlobFromObj = (obj: {
  [string]: string,
}): Blob => {
  const contents = Object.keys(obj).map(
    key => `${key}${obj[key]}\r\n`
  );

  const sjisContents = convertStr2Sjis(contents.join(''));

  return new Blob(sjisContents, { type: 'text/plain' });
};

export const makeBlobFromObjList = (
  objList: Array<Object>,
  header: ?string
): Blob => {
  const contentWithoutHeader: Array<string> = objList.map(
    item => `${Object.values(item).join(',')}\r\n`
  );

  const uniContent: Array<string> = header
    ? [`${header}\r\n`, ...contentWithoutHeader]
    : contentWithoutHeader;

  const sjisContent = convertStr2Sjis(uniContent.join(''));

  return new Blob(sjisContent, { type: 'text/plain' });
};

export const makeBlobFromStr = (text: string): Blob => {
  const output = convertStr2Sjis(text);
  return new Blob(output, { type: 'text/plain' });
};

export const injectHTMLDownloadTrigger = (
  element: HTMLElement,
  Blob: Blob,
  filename: string
): void => {
  element.setAttribute('download', filename);
  element.setAttribute('href', window.URL.createObjectURL(Blob));
};
