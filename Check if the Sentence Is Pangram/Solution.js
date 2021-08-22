//Solution1 
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let array = new Array(26);
    for(let i = 0; i < sentence.length; i++){
        let ascii = (sentence.charAt(i)).charCodeAt(0)
         array[ascii-97] = sentence.charAt(i)
    }
    for(let i = 0; i < 26; i++){
       if(!array[i])
           return false
    }
    return true
};

//solution2 
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram2 = function(sentence) {
    let set = new Set();
    let unqiueChar = 0;
    for(let i = 0; i < sentence.length; i++){
        if(!set.has(sentence.charAt(i))){
            set.add(sentence.charAt(i));
            unqiueChar++
        }
    }
    return unqiueChar === 26 ? true : false
};