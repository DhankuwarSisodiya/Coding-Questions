/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let n=nums.length;
        let res,temp=0;
        for(let i=0;i<n;i++)
        {
            temp |=nums[i];
        }
        res = temp * Math.pow(2, n-1);
        return res;
};