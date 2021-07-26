/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    nums.sort((a,b)=>{return a-b});
    let i = 0;
    let j = nums.length-1
    let n = nums.length-1;
    let sum = 0;
    let sum1 = 0;
    let result = [];
    for(let i=0;i<=n;i++)
    {
        sum+=nums[i];
    }
    for(let i=n;i>=0;i--)
    {
        sum1+=nums[i];
        sum-=nums[i]
        result.push(nums[i])
        if(sum < sum1){
            break
        }
    }
    return result;
};