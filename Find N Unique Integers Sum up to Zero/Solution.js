/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let ans = [];
    let count = 0;
    if (n%2 === 1) {
        ans.push(0)
        count = 1
    }
    for(let i = 1; i <= n, count<n ; i++) {
        ans.push(i);
        ans.push(-i)
        count +=2
    }
    return ans
};