//Solution 1 
  /**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
const array = [...s]
  let x = 0
  let balance = 0
  let result = ''
  for (let i = 0; i < array.length; i++) {
    const ch = array[i]
    if (ch === '(') {
      balance++
    } else {
      balance--
    }
    if (balance === 0) {
      result += array.slice(x + 1, i).join('')
      x = i + 1
    }
  }
  return result
};
  //Solution 2
  /**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses2 = function(s) {
    let stack = [];
    let result = "";
    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) === '('){
            if(stack.length >0){
                result += s.charAt(i);
            }
            stack.push(s.charAt(i));
        }
        else{
            let c = stack.pop();
            if(stack.length > 0){
                result+= s.charAt(i);
            }
        }
    }
    return result
    
};