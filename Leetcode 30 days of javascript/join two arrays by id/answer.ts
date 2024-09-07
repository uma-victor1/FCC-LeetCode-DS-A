//@ts-ignore
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type ArrayType = { id: number } & Record<string, JSONValue>;

// let's brute force
// join two arrays
//

function join(arr1, arr2) {
  let joinedArray = arr1.concat(arr2);
  let merged = {};

  joinedArray.forEach((obj) => {
    let id = obj["id"];
    if (!merged[id]) {
      merged[id] = { ...obj };
    } else {
      merged[id] = { ...merged[id], ...obj };
    }
  });

  let combinedArr = Object.values(merged);
  combinedArr.sort((a, b) => a["id"] - b["id"]);
  return combinedArr;
}
