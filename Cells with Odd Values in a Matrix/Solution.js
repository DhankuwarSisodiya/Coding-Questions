/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    var initial = [];
    for (var i = 0; i < m; i++) {
        initial.push([]);
    }
    let count = 0;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            initial[i][j] = 0;
        }
    }
    for(let i = 0; i < n; i++) {
        for(let k = 0; k < indices.length; k++) {
            let r = indices[k][0]
            initial[r][i] = initial[r][i] + 1
        }
    }
    for(let i = 0; i < m; i++) {
        for(let k = 0; k < indices.length; k++) {
            let c = indices[k][1]
            initial[i][c] = initial[i][c] + 1
        }
    }
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(initial[i][j]%2 == 1)
                count++
        }
    }
    return count;
};