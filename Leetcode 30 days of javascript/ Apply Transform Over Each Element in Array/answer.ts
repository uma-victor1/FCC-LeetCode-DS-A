/**
 * Applies a given function to each element of the input array and returns a new array with the transformed values.
 *
 * @param arr - The input array of numbers to be transformed.
 * @param fn - The function to apply to each element of the input array. It takes two parameters: the current element and its index.
 * @returns A new array containing the transformed values.
 */
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  // declare empty array to hold transform
  let transformedArray = [];
  // after each transform push transformed value to new array
  for (let i = 0; i < arr.length; i++) {
    //@ts-ignore
    transformedArray.push(fn(arr[i], i));
  }
  // return transformed array
  return transformedArray;
}
