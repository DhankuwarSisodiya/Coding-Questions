/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let result = []
    let j = 0, i = 1
    while( i <= n && j < target.length) {
        if(target[j] === i){
            result.push("Push")
            i++
            j++
        } else{
            result.push("Push")
            result.push("Pop")
            i++
        }
    }
    return result
};