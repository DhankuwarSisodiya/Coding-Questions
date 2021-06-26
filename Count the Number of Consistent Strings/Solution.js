/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    var count = 0;
    for(var i = 0; i< words.length; i++) {
        let allLettersPresent = 0;
        for(var j = 0 ; j < words[i].length; j++){
            if (allowed.indexOf(words[i][j]) >= 0) {
                allLettersPresent++
            }
        }
        if(allLettersPresent === words[i].length)
            count++;
    }
    return count;
};