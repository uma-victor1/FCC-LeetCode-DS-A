//https://leetcode.com/problems/remove-duplicates-from-sorted-array/
function removeDuplicates(nums: number[]): number {
  let temp = [...new Set(nums)];
  nums.length = 0;
  nums.push(...temp);
  return nums.length;
}
