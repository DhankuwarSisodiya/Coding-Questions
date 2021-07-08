/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let count = 0;
     let i = 0;
     while( count < k && i < s.length){
         if(s[i] == " "){
             count++;
         }
         i++;
     }
     if(count < k){
         return s.substring(0, i);
     } else {
         return s.substring(0,i-1)
     }  
 };