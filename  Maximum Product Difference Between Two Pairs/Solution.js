//Solution 1
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length
    return (nums[n-1] * nums[n-2]) - (nums[0] * nums[1])
};

//Solution 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let first = 0;
    let second = 0;
    
    let third = Infinity
    let fourth = Infinity
    
    for(let i= 0; i< nums.length; i++) {
        let value = nums[i]
        
        if(value >= first || value >= second) {
            second = first > second ? first : second
            first = value
        }
        
        if(value <= third || value <= fourth) {
            fourth = third < fourth ? third : fourth
            third = value
        }
    }
    return (first*second) - (third*fourth)
};