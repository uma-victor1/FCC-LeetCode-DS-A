// https://leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * Reduces an array of numbers to a single value using the provided accumulator function.
 *
 * @param nums - The array of numbers to be reduced.
 * @param fn - The accumulator function that reduces the array.
 * @param init - The initial value for the accumulator.
 * @returns The final reduced value.
 */

function reduce(
  nums: number[],
  fn: (accum: number, curr: number) => number,
  init: number
): number {
  if (!nums.length) return init;
  let tot = init;
  nums.forEach((num, i) => {
    tot = fn(tot, num);
  });
  return tot;
}
