/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max1 = 0
     let max2 = 0
     for (let i = 0; i < nums.length; i++) {
         if(nums[i] >= max1) {
             max2 = max1 // 4
             max1 = nums[i] // 5
         } else if (max2 < nums[i]) {
             max2 = nums[i]
         }
     }
     
     return (max1-1)* (max2-1) 
 };