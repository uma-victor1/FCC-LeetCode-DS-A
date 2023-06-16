/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort()
   for(let i =-1; i<nums.length; i++) {
    //   let numCheck = nums.splice(nums[i],1)
        let nextNum = i+1;
        if(nums[i] == nums[nextNum]) { return true}
   }
   return false
};
