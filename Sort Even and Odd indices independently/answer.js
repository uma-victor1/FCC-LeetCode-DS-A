/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {

    let evenArr = []
       let oddArr = []
       
       for (let i = 0; i < nums.length; i++) {
           if (i % 2 === 0) {
               evenArr.push(nums[i])
           } else {
               oddArr.push(nums[i])
           }
       }
       
       evenArr = evenArr.sort((a, b) => a -b)
       oddArr = oddArr.sort((a, b) => b - a)
   
       let sortedArr = []
       for(let y = 0; y < nums.length; y++) {
           if(y % 2 == 0) {
               sortedArr[y] = evenArr.shift()
           } else {
               sortedArr[y] = oddArr.shift()
           }
   
       }
       return sortedArr
   
   };
   