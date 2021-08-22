/**
 * @param {string} s
 * @return {number}
 */
var countLetters = function(s) {
    let count = 1;
    let total = 1;
    for(let i = 1; i < s.length; i++) {
        if(s.charAt(i) !== s.charAt(i-1)) {
            count = 1;
        } else {
            count++
        }
        total+=count
    }
    return total
};