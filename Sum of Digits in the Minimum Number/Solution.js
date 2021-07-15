/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfDigits = function(nums) {
    let max = Infinity
    for(let i = 0; i < nums.length; i++){
            max = Math.min(max, nums[i])
    }
    let sum = 0
    while(max > 0){
        sum += Math.floor(max % 10)
        max = Math.floor(max / 10);
    }
    console.log(sum)
    return sum % 2 === 0 ? 1 : 0
};