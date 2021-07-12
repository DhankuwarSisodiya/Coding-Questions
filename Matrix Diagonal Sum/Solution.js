// Solution 1
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let result = 0;
    let l = 0;
    let r = mat.length - 1;
    
    while(l <= r){
        if(l === r){result += mat[l][l]}
        else{
            result += mat[l][l];
            result += mat[l][r];
            result += mat[r][l];
            result += mat[r][r];
        }
        l++;
        r--;
    }
    
    return result;
};

// Solution 2
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    let n = mat.length;
    for(let i =0; i < n; i++) {
        sum += mat[i][i] + mat[i][n-1-i];
    }
    if(n%2 == 1){
        let mid = Math.floor(n/2);
        sum = sum - mat[mid][mid];
    }
    return sum;
};