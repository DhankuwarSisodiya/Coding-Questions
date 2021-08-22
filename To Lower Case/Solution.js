/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let res = ""
    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i).charCodeAt(0) < 91 && s.charAt(i).charCodeAt(0) > 64)
            res += String.fromCharCode(s.charAt(i).charCodeAt(0)+32)
        else
            res += s.charAt(i)
    }
    return res
};