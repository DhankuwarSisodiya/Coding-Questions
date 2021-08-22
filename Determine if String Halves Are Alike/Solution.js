/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let count1 = 0;
    let count2 = 0;
    for(let i =0; i< s.length; i++) {
        if(isVowel(s.charAt(i).toLowerCase())){
            if(i < s.length/2)
                count1++;
            else
                count2++;
        }
    }
    
    return count1 === count2
};

var isVowel = function(c){
    if(c === 'a' ||
       c === 'e' ||
       c === 'i' ||
       c === 'o' ||
       c === 'u'){
        return true
    }
    return false
}