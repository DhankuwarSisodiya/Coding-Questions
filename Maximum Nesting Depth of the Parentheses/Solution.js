/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let maxNest = 0;
    let nestStack = 0;
    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) === '('){
            nestStack++;
        } else if(s.charAt(i) === ')') {
            nestStack--;
        }
        if (nestStack > maxNest) maxNest = nestStack;
    }
    return maxNest;
};