type Fn = (n: number, i: number) => any;

/**
 * Filters elements from an array based on the provided function.
 *
 * @param arr - The array to filter elements from.
 * @param fn - The function used to filter elements. It takes two parameters: the current element and its index.
 * @returns A new array containing the elements that passed the filter function.
 */
function filter(arr: number[], fn: Fn): number[] {
  let filteredArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
