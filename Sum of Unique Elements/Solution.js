/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let map = new Map();
    let sum = 0
    for(let i = 0; i <nums.length; i++) {
        if(!map.has(nums[i])){
            map.set(nums[i],1)
            sum+=nums[i]
        } else {
            let count = map.get(nums[i])
            if (count < 2) sum -= nums[i];
            map.set(nums[i], count+1);
            console.log(count)
        }
    }
    return sum
};