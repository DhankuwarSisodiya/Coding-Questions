/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let distinct = []
    let map = new Map()
    let ans = true
    for(let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])){
            map.set(arr[i], map.get(arr[i])+1)
        } else {
            map.set(arr[i], 1)
        }
    }
   map.forEach((value,key)  => {
       if(distinct.indexOf(value) >= 0)
           ans = false
       else
           distinct.push(value)
   })    
    return ans
};