/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let rowCount = []
    for(let i = 0; i < mat.length; i++) {
        let count = 0;
        for(let j = 0; j <mat[i].length; j++) {
            count += mat[i][j]
        }
        rowCount.push([count,i]);
    }
    rowCount.sort((a, b) => { return a[0] - b[0] })
    let result = []
    for(let i = 0; i < k; i++){
        result.push(rowCount[i][1])
    }
    return result
};