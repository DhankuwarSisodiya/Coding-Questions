/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let indexes = []
    let result = []
    let maxVal = Number.MAX_VALUE
    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) === c)
            indexes.push(i)
    }
    let j = 0
    for(let i = 0; i < s.length; i++) {   
        if(j<indexes.length){      
            result[i] = Math.min(Math.abs(maxVal-i),Math.abs(indexes[j]-i))
            if(result[i] === 0){
                maxVal = indexes[j]
                j++
            }
        } else {
            result[i] = Math.abs(indexes[indexes.length-1]-i)
        }
    }
    return result
};