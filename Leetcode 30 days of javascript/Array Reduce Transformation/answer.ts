// https://leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript

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
