//Solution1
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    let result = []
    let map = {}
    let n;
    function count(arr) {
        for(let i = 0; i< arr.length; i++){
            n = arr[i];
            map[n] = (map[n] || 0) + 1
            if(map[n] === 3){
                result.push(n)
            }
        }
    }
    count(arr1)
    count(arr2)
    count(arr3)
    return result
};