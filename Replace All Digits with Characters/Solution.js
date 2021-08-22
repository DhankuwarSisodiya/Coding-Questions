/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let res = ""
    for(let i = 0; i< s.length; i++){
        if (i%2 == 0)
            res +=s.charAt(i)
        else {
            let ascii = s.charAt(i-1).charCodeAt(0);
            res+= String.fromCharCode(ascii+parseInt(s.charAt(i))) 
        }
    }
    return res;
};