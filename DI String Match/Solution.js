/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let res = []
    let min = 0;
    let max = s.length
    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) === 'I') {
            res.push(min)
            min++
        } else {
            res.push(max)
            max--
        }
    }
    res.push(min)
    return res
};