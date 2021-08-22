/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let outputArray = new Array(9);
    let words = s.split(" ")
    for(let i=0; i < words.length; i++){
        let sub = words[i];
        let pos = sub.charAt(sub.length-1)
        outputArray[pos] = sub.substring(0, sub.length-1);
    }
    return outputArray.join(" ").trim();
};