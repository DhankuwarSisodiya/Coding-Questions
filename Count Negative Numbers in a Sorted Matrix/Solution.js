/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] < 0){
                count += grid[i].length-j
                break
            }
        }
    }
    return count
};

//Solution 2 
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0
    let currentRow = 0
    
    for(let col = grid[0].length-1; col >= 0 ; col--){
        if(currentRow < (grid.length) && grid[currentRow][col] < 0){
            count++;
            if(col == 0){
              currentRow++
                col = grid[0].length  
            }
        } else if(currentRow < grid.length){     
            currentRow++
            col = grid[0].length
        }
    }
    return count
};