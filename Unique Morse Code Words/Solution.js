/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let abc = String.fromCharCode(...[...Array('z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1).keys()].map(i => i + 'a'.charCodeAt(0)));
    let m =[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]    
    let obj = {};
    for(let i=0;i<abc.length; i++){
        obj[abc[i]]=m[i];
    }
    let a = words.map(el => el.split("").map(e => obj[e]).join(""));
    return new Set(a).size;
};