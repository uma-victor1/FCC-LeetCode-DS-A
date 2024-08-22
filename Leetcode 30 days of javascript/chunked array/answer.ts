type ChunkedJSONValue =
  | null
  | boolean
  | number
  | string
  | ChunkedJSONValue[]
  | { [key: string]: ChunkedJSONValue };
type Obj = Record<string, ChunkedJSONValue> | Array<ChunkedJSONValue>;

// given an array [] and size
// return [[],[]] chunked array of size.

function chunk(arr: Obj[], size: number): Obj[][] {
  let chunkedArr: Obj[][] = [];

  for (let i = 0; i < arr.length; i += size) {
    let cut = i + size;
    chunkedArr.push(arr.slice(i, cut));
  }
  return chunkedArr;
}
