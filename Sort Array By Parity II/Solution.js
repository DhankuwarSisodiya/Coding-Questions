/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let result = []
    let even = 0;
    let odd = 1;
    for(let i = 0; i< nums.length; i++) {
        if (nums[i]%2 === 0) {
            result[even] = nums[i]
            even +=2
        }
            
        else {
            result[odd] = nums[i]
            odd +=2
        } 
    }
    return result
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let j = 1
    for(let i = 0; i< nums.length; i+=2) {
        if (nums[i]%2 === 1) {
            while(nums[j]%2 === 1)
                j +=2
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
        }
    }
    return nums
};